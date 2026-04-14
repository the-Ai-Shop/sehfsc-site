'use client';

import { useEffect } from 'react';

const ALLOWED_ORIGINS = [
  'https://portal.thegoodsite.co',
  'http://localhost:3007',
];

const TEXT_SELECTORS = 'h1, h2, h3, h4, h5, h6, p, a, span, li, blockquote, figcaption, dt, dd, label, td, th';
const STYLE_ID = 'edit-bridge-styles';
const CONNECT_STYLE_ID = 'connect-bridge-styles';

function getComponentFile(el: HTMLElement): string | null {
  const wrapper = el.closest('[data-component]');
  return wrapper?.getAttribute('data-component') || null;
}

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    [data-editable]:hover {
      outline: 2px dashed #3b82f6 !important;
      outline-offset: 2px;
      cursor: text;
    }
    [data-editable][contenteditable="true"] {
      outline: 2px solid #3b82f6 !important;
      outline-offset: 2px;
      background: rgba(59, 130, 246, 0.05);
    }
    .eb-img-wrap {
      position: relative !important;
      cursor: pointer !important;
    }
    .eb-img-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s;
      pointer-events: none;
      z-index: 10;
      border-radius: 4px;
    }
    .eb-img-overlay span {
      opacity: 0;
      transition: opacity 0.15s;
      color: white;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      background: rgba(0,0,0,0.6);
      border-radius: 6px;
      white-space: nowrap;
    }
    .eb-img-wrap:hover .eb-img-overlay {
      background: rgba(0, 0, 0, 0.35);
    }
    .eb-img-wrap:hover .eb-img-overlay span {
      opacity: 1;
    }
    .eb-embed-wrap {
      position: relative !important;
      cursor: pointer !important;
    }
    .eb-embed-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s;
      z-index: 20;
      border-radius: 4px;
      pointer-events: auto;
      cursor: pointer;
    }
    .eb-embed-overlay span {
      opacity: 0;
      transition: opacity 0.15s;
      color: white;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      background: rgba(0,0,0,0.6);
      border-radius: 6px;
      white-space: nowrap;
    }
    .eb-embed-wrap:hover .eb-embed-overlay {
      background: rgba(0, 0, 0, 0.45);
    }
    .eb-embed-wrap:hover .eb-embed-overlay span {
      opacity: 1;
    }
    .eb-link-wrap {
      position: relative !important;
      cursor: pointer !important;
    }
    .eb-link-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s;
      pointer-events: none;
      z-index: 10;
      border-radius: 4px;
    }
    .eb-link-overlay span {
      opacity: 0;
      transition: opacity 0.15s;
      color: white;
      font-size: 13px;
      font-weight: 600;
      padding: 6px 14px;
      background: rgba(0,0,0,0.6);
      border-radius: 6px;
      white-space: nowrap;
    }
    .eb-link-wrap:hover .eb-link-overlay {
      background: rgba(0, 0, 0, 0.35);
    }
    .eb-link-wrap:hover .eb-link-overlay span {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}

function removeStyles() {
  document.getElementById(STYLE_ID)?.remove();
}

export default function EditBridge() {
  useEffect(() => {
    let active = false;
    const editableEls: HTMLElement[] = [];
    const imgEls: HTMLElement[] = [];
    const embedEls: HTMLElement[] = [];
    const overlays: HTMLElement[] = [];
    const listeners: Array<[HTMLElement, string, EventListener]> = [];

    function addListener(el: HTMLElement, evt: string, fn: EventListener) {
      el.addEventListener(evt, fn);
      listeners.push([el, evt, fn]);
    }

    function setupImageEditable(el: HTMLElement, src: string, desc: string) {
      // Find or create a wrapper that can hold the overlay
      let wrap = el;
      if (el.tagName === 'IMG') {
        // For img tags, use the parent as the wrap target
        const parent = el.parentElement;
        if (parent) {
          wrap = parent;
        }
      }

      if (wrap.querySelector('.eb-img-overlay')) return; // Already set up

      wrap.classList.add('eb-img-wrap');
      el.setAttribute('data-img-editable', 'true');
      imgEls.push(el);

      // Create overlay div
      const overlay = document.createElement('div');
      overlay.className = 'eb-img-overlay';
      overlay.innerHTML = '<span>Click to replace image</span>';
      wrap.appendChild(overlay);
      overlays.push(overlay);

      // Click handler on the wrapper
      addListener(wrap, 'click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const componentFile = getComponentFile(el);
        if (componentFile) {
          window.parent.postMessage({
            type: 'imageClicked',
            payload: {
              componentFile,
              currentSrc: src,
              elementDesc: desc,
            },
          }, '*');
        }
      });
    }

    function detectPlatform(url: string): string {
      if (/instagram\.com/.test(url)) return 'instagram';
      if (/youtube\.com|youtu\.be/.test(url)) return 'youtube';
      if (/tiktok\.com|vm\.tiktok\.com/.test(url)) return 'tiktok';
      if (/vimeo\.com/.test(url)) return 'vimeo';
      if (/facebook\.com|fb\.watch/.test(url)) return 'facebook';
      if (/twitter\.com|x\.com/.test(url)) return 'twitter';
      if (/open\.spotify\.com/.test(url)) return 'spotify';
      if (/linkedin\.com/.test(url)) return 'linkedin';
      return 'unknown';
    }

    function setupEmbedEditable(el: HTMLElement, src: string) {
      if (el.hasAttribute('data-embed-editable')) return;
      if (el.querySelector('.eb-embed-overlay')) return;

      // For anchor tags, the anchor itself is both the element and the wrapper
      const isAnchor = el.tagName === 'A';
      const wrap = el;

      wrap.classList.add('eb-embed-wrap');
      el.setAttribute('data-embed-editable', 'true');
      embedEls.push(el);

      const platform = detectPlatform(src);
      const label = platform !== 'unknown'
        ? `Click to update ${platform} post`
        : 'Click to update embed URL';

      const overlay = document.createElement('div');
      overlay.className = 'eb-embed-overlay';
      overlay.innerHTML = `<span>${label}</span>`;
      wrap.appendChild(overlay);
      overlays.push(overlay);

      // Block the anchor's default navigation during edit mode
      if (isAnchor) {
        addListener(el, 'click', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      }

      addListener(overlay, 'click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const componentFile = getComponentFile(el);
        if (componentFile) {
          window.parent.postMessage({
            type: 'socialEmbedClicked',
            payload: {
              componentFile,
              currentUrl: src,
              platform,
            },
          }, '*');
        }
      });
    }

    function activate() {
      if (active) return;
      active = true;
      injectStyles();

      // Text elements
      document.querySelectorAll('[data-component]').forEach((wrapper) => {
        wrapper.querySelectorAll(TEXT_SELECTORS).forEach((el) => {
          const htmlEl = el as HTMLElement;
          const text = htmlEl.textContent?.trim();
          if (!text || text.length < 2) return;

          // Skip if a parent text element is already editable (avoid double-binding)
          if (htmlEl.parentElement?.closest('[data-editable]')) return;

          // Skip pure structural wrappers that have NO direct text nodes —
          // only children that are themselves text elements.
          const children = htmlEl.querySelectorAll(TEXT_SELECTORS);
          if (children.length > 0) {
            // Check if there's any direct text content outside child elements
            let hasDirectText = false;
            for (const node of Array.from(htmlEl.childNodes)) {
              if (node.nodeType === 3 && node.textContent && node.textContent.trim().length > 0) {
                hasDirectText = true;
                break;
              }
            }
            if (!hasDirectText) return; // Pure wrapper — skip
          }

          htmlEl.setAttribute('data-editable', 'true');
          htmlEl.setAttribute('data-original-text', text);
          editableEls.push(htmlEl);

          addListener(htmlEl, 'click', (e) => {
            if (htmlEl.contentEditable === 'true') return; // Already editing — let cursor move
            e.preventDefault();
            e.stopPropagation();
            htmlEl.contentEditable = 'true';
            htmlEl.focus();
          });

          // Send edit on input (real-time) so Save button enables immediately
          addListener(htmlEl, 'input', () => {
            const newText = htmlEl.textContent?.trim() || '';
            const originalText = htmlEl.getAttribute('data-original-text') || '';
            if (newText && newText !== originalText) {
              const componentFile = getComponentFile(htmlEl);
              if (componentFile) {
                window.parent.postMessage({
                  type: 'textEdited',
                  payload: {
                    componentFile,
                    elementTag: htmlEl.tagName.toLowerCase(),
                    originalText,
                    newText,
                  },
                }, '*');
              }
            }
          });

          addListener(htmlEl, 'blur', () => {
            htmlEl.contentEditable = 'false';
            // Send final version on blur too
            const newText = htmlEl.textContent?.trim() || '';
            const originalText = htmlEl.getAttribute('data-original-text') || '';
            if (newText && newText !== originalText) {
              const componentFile = getComponentFile(htmlEl);
              if (componentFile) {
                window.parent.postMessage({
                  type: 'textEdited',
                  payload: {
                    componentFile,
                    elementTag: htmlEl.tagName.toLowerCase(),
                    originalText,
                    newText,
                  },
                }, '*');
              }
            }
          });

          addListener(htmlEl, 'keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter' && htmlEl.tagName !== 'P') {
              e.preventDefault();
              htmlEl.blur();
            }
          });
        });
      });

      // Image elements — <img> tags
      document.querySelectorAll('[data-component] img').forEach((el) => {
        const img = el as HTMLImageElement;
        // Skip tiny icons (< 40px either dimension)
        if (img.naturalWidth > 0 && img.naturalWidth < 40) return;
        if (img.naturalHeight > 0 && img.naturalHeight < 40) return;

        setupImageEditable(img, img.src, img.alt || img.className || 'image');
      });

      // Background-image elements — divs/sections with url() backgrounds
      document.querySelectorAll('[data-component] [style]').forEach((el) => {
        const htmlEl = el as HTMLElement;
        const bg = htmlEl.style.backgroundImage || '';
        const urlMatch = bg.match(/url\(['"]?([^'"\)]+)['"]?\)/);
        if (!urlMatch) return;
        // Skip tiny gradient patterns
        if (bg.includes('gradient') && !urlMatch) return;

        setupImageEditable(htmlEl, urlMatch[1], 'background image');
      });

      // Also check computed styles for background images set via className
      document.querySelectorAll('[data-component] section, [data-component] div').forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.hasAttribute('data-img-editable')) return; // Already handled
        const computed = getComputedStyle(htmlEl);
        const bg = computed.backgroundImage || '';
        if (bg === 'none' || !bg.includes('url(')) return;
        const urlMatch = bg.match(/url\(['"]?([^'"\)]+)['"]?\)/);
        if (!urlMatch) return;
        // Skip data URIs and gradients-only
        if (urlMatch[1].startsWith('data:')) return;

        setupImageEditable(htmlEl, urlMatch[1], 'background image');
      });

      // Social media embeds — iframes (Instagram, YouTube, TikTok, Vimeo)
      document.querySelectorAll('[data-component] iframe').forEach((el) => {
        const iframe = el as HTMLIFrameElement;
        const src = iframe.src || iframe.getAttribute('data-src') || '';
        if (!src) return;
        setupEmbedEditable(iframe, src);
      });

      // Video elements with social media sources
      document.querySelectorAll('[data-component] video').forEach((el) => {
        const video = el as HTMLVideoElement;
        const src = video.src || video.querySelector('source')?.src || '';
        if (!src) return;
        setupEmbedEditable(video, src);
      });

      // Links wrapping thumbnails (common pattern: <a href="instagram.com/reel/..."><img .../></a>)
      const socialDomains = ['instagram.com', 'youtube.com', 'youtu.be', 'tiktok.com', 'vm.tiktok.com', 'vimeo.com', 'facebook.com', 'fb.watch', 'twitter.com', 'x.com', 'open.spotify.com', 'linkedin.com'];
      document.querySelectorAll('[data-component] a').forEach((el) => {
        const anchor = el as HTMLAnchorElement;
        const href = anchor.href || '';
        if (!href || !socialDomains.some(d => href.includes(d))) return;
        setupEmbedEditable(anchor, href);
      });

      // CTA links/buttons — allow editing the href/URL
      document.querySelectorAll('[data-component] a[href]').forEach((el) => {
        const anchor = el as HTMLAnchorElement;
        const href = anchor.href || '';
        if (!href) return;
        // Skip if already handled as social embed or image
        if (anchor.hasAttribute('data-embed-editable') || anchor.hasAttribute('data-img-editable')) return;
        // Skip pure hash links and javascript: links
        if (href === '#' || href.startsWith('javascript:')) return;
        // Skip if it's just a text-only link handled by text editing (single inline word)
        // Only target CTA-style links: buttons, styled links with short text
        const text = anchor.textContent?.trim() || '';
        if (!text || text.length < 2 || text.length > 80) return;

        const componentFile = getComponentFile(anchor);
        if (!componentFile) return;

        // Make the anchor relatively positioned for the overlay
        const pos = getComputedStyle(anchor).position;
        if (pos === 'static') anchor.style.position = 'relative';

        anchor.classList.add('eb-link-wrap');
        const overlay = document.createElement('div');
        overlay.className = 'eb-link-overlay';
        overlay.innerHTML = '<span>Click to edit link URL</span>';
        anchor.appendChild(overlay);
        overlays.push(overlay);

        addListener(anchor, 'click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          window.parent.postMessage({
            type: 'linkClicked',
            payload: {
              componentFile,
              buttonText: text,
              currentHref: href,
            },
          }, '*');
        });
      });
    }

    function deactivate() {
      if (!active) return;
      active = false;
      removeStyles();
      listeners.forEach(([el, evt, fn]) => el.removeEventListener(evt, fn));
      listeners.length = 0;
      editableEls.forEach((el) => {
        el.removeAttribute('data-editable');
        el.removeAttribute('data-original-text');
        el.contentEditable = 'false';
      });
      editableEls.length = 0;
      overlays.forEach((ov) => {
        ov.parentElement?.classList.remove('eb-img-wrap');
        ov.parentElement?.classList.remove('eb-embed-wrap');
        ov.parentElement?.classList.remove('eb-link-wrap');
        ov.remove();
      });
      overlays.length = 0;
      imgEls.forEach((el) => {
        el.removeAttribute('data-img-editable');
      });
      imgEls.length = 0;
      embedEls.forEach((el) => {
        el.removeAttribute('data-embed-editable');
      });
      embedEls.length = 0;
    }

    /* ---- Connect Mode (product → button linking) ---- */

    let connectActive = false;
    const connectListeners: Array<[HTMLElement, string, EventListener]> = [];
    const connectOverlays: HTMLElement[] = [];
    let connectButtonCounter = 0;
    let selectedProductName = '';

    function addConnectListener(el: HTMLElement, evt: string, fn: EventListener) {
      el.addEventListener(evt, fn);
      connectListeners.push([el, evt, fn]);
    }

    function injectConnectStyles() {
      if (document.getElementById(CONNECT_STYLE_ID)) return;
      const style = document.createElement('style');
      style.id = CONNECT_STYLE_ID;
      style.textContent = `
        [data-connectable] {
          cursor: crosshair !important;
          transition: outline 0.15s, outline-offset 0.15s;
        }
        [data-connectable]:hover {
          outline: 2px dashed #22c55e !important;
          outline-offset: 2px;
        }
        [data-connected] {
          outline: 2px solid #22c55e !important;
          outline-offset: 2px;
        }
        .eb-connect-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0);
          transition: background 0.15s;
          pointer-events: none;
          z-index: 10;
          border-radius: 4px;
        }
        .eb-connect-overlay span {
          opacity: 0;
          transition: opacity 0.15s;
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.85);
          border-radius: 4px;
          white-space: nowrap;
        }
        [data-connectable]:hover .eb-connect-overlay {
          background: rgba(0, 0, 0, 0.15);
          pointer-events: auto;
        }
        [data-connectable]:hover .eb-connect-overlay span {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }

    function removeConnectStyles() {
      document.getElementById(CONNECT_STYLE_ID)?.remove();
    }

    function activateConnect(payload: { products?: Array<{ id: string; name: string; checkoutUrl: string }> }) {
      if (connectActive) return;
      connectActive = true;
      injectConnectStyles();

      const buttons: Array<{ id: string; componentFile: string; text: string; currentHref: string }> = [];
      const checkoutUrls = (payload.products || []).map(p => p.checkoutUrl);

      document.querySelectorAll('[data-component]').forEach((wrapper) => {
        // Skip nav elements
        if (wrapper.closest('nav') || wrapper.closest('header nav')) return;

        // Find links and buttons
        const elements = wrapper.querySelectorAll('a[href], button, [role="button"]');
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          const text = htmlEl.textContent?.trim() || '';
          if (!text || text.length < 2) return;

          // Skip tiny icon-only elements
          if (text.length > 60) return;

          const href = (el as HTMLAnchorElement).href || '';
          const componentFile = getComponentFile(htmlEl);
          if (!componentFile) return;

          const buttonId = `btn-${connectButtonCounter++}`;
          htmlEl.setAttribute('data-connectable', 'true');
          htmlEl.setAttribute('data-connect-id', buttonId);

          // Check if already connected to a product
          if (checkoutUrls.some(url => href.includes(url))) {
            htmlEl.setAttribute('data-connected', 'true');
          }

          // Make element relatively positioned for overlay
          const pos = getComputedStyle(htmlEl).position;
          if (pos === 'static') htmlEl.style.position = 'relative';

          // Add overlay label
          const overlay = document.createElement('div');
          overlay.className = 'eb-connect-overlay';
          overlay.innerHTML = '<span>Click to connect product</span>';
          htmlEl.appendChild(overlay);
          connectOverlays.push(overlay);

          // Prevent navigation and send click event
          addConnectListener(htmlEl, 'click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.parent.postMessage({
              type: 'buttonClicked',
              payload: {
                buttonId,
                componentFile,
                text,
                currentHref: href,
              },
            }, '*');
          });

          buttons.push({ id: buttonId, componentFile, text, currentHref: href });
        });
      });

      // Report all connectable buttons to portal
      window.parent.postMessage({
        type: 'connectModeReady',
        payload: { buttons },
      }, '*');
    }

    function deactivateConnect() {
      if (!connectActive) return;
      connectActive = false;
      removeConnectStyles();
      connectListeners.forEach(([el, evt, fn]) => el.removeEventListener(evt, fn));
      connectListeners.length = 0;
      connectOverlays.forEach(ov => ov.remove());
      connectOverlays.length = 0;

      document.querySelectorAll('[data-connectable]').forEach(el => {
        el.removeAttribute('data-connectable');
        el.removeAttribute('data-connect-id');
        el.removeAttribute('data-connected');
      });
      connectButtonCounter = 0;
      selectedProductName = '';
    }

    function updateProductLabel(payload: { productName: string }) {
      selectedProductName = payload.productName;
      connectOverlays.forEach(ov => {
        const span = ov.querySelector('span');
        if (span) span.textContent = `Click to link "${selectedProductName}"`;
      });
    }

    function clearProductLabel() {
      selectedProductName = '';
      connectOverlays.forEach(ov => {
        const span = ov.querySelector('span');
        if (span) span.textContent = 'Click to connect product';
      });
    }

    function handleMessage(e: MessageEvent) {
      if (!ALLOWED_ORIGINS.includes(e.origin)) return;
      const { type, payload: msgPayload } = e.data || {};
      if (type === 'ping') {
        window.parent.postMessage({ type: 'editBridgeReady' }, '*');
        return;
      }
      if (type === 'enterEditMode') activate();
      else if (type === 'exitEditMode') deactivate();
      else if (type === 'enterConnectMode') activateConnect(msgPayload || {});
      else if (type === 'exitConnectMode') deactivateConnect();
      else if (type === 'selectProduct') updateProductLabel(msgPayload || {});
      else if (type === 'deselectProduct') clearProductLabel();
      else if (type === 'flushEdits') {
        // Force-commit any active contentEditable element (called before Save)
        const activeEl = document.querySelector('[data-editable][contenteditable="true"]') as HTMLElement | null;
        if (activeEl) activeEl.blur();
      }
      else if (type === 'resetEdits') {
        // Reset original text markers
        editableEls.forEach((el) => {
          const current = el.textContent?.trim() || '';
          el.setAttribute('data-original-text', current);
        });
      }
    }

    window.addEventListener('message', handleMessage);

    // Notify portal that bridge is ready — repeat a few times to handle race condition
    function sendReady() {
      window.parent.postMessage({ type: 'editBridgeReady' }, '*');
    }
    sendReady();
    const readyRetries = [500, 1500, 3000, 5000];
    const readyTimers = readyRetries.map((ms) => setTimeout(sendReady, ms));

    return () => {
      deactivate();
      deactivateConnect();
      readyTimers.forEach(clearTimeout);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return null;
}
