// lib/gtag.js
export const GA_MEASUREMENT_ID = "G-N9LZ0CL3N0"; // replace with your real ID

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
