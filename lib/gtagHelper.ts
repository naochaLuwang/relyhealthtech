const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  // Call the gtag.js library's "config" method to configure the tracking for the specified GA property
  // Pass in the GA_MEASUREMENT_ID and an object with the "page_path" parameter set to the specified URL
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export default pageview;
