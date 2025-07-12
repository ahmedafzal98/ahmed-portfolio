// lib/gtag.ts
export const GA_MEASUREMENT_ID = "G-N9LZ0CL3N0"; // Replace with your real ID

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
