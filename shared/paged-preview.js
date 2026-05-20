(() => {
  // Open any generated HTML page with ?paged=1 to preview print pagination.
  const params = new URLSearchParams(window.location.search);
  const shouldPreview = params.has("paged") || params.get("print") === "1" || window.location.hash === "#paged";
  if (!shouldPreview) return;

  window.PagedConfig = {
    auto: false,
    after: (flow) => {
      const updatePageCount = () => {
        window.__pagedjsPageCount = Math.max(
          flow && typeof flow.total === "number" ? flow.total : 0,
          document.querySelectorAll(".pagedjs_page").length,
        );
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          updatePageCount();
          window.__pagedjsReady = true;
          document.documentElement.dataset.pagedjsReady = "true";
          setTimeout(updatePageCount, 100);
          setTimeout(updatePageCount, 500);
          setTimeout(updatePageCount, 1000);
        });
      });
    },
  };

  const script = document.createElement("script");
  script.src = "shared/paged.polyfill.js";
  script.dataset.pagedjs = "true";
  script.onload = () => {
    if (window.PagedPolyfill && typeof window.PagedPolyfill.preview === "function") {
      window.PagedPolyfill.preview();
    }
  };
  script.onerror = () => {
    console.error("Paged.js runtime is missing from shared/paged.polyfill.js");
  };
  document.head.appendChild(script);
})();