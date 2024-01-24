function navigateToNewPage(pageUrl) {
  // Clear the existing content
  document.body.innerHTML = "";

  // Load the new content
  fetch(pageUrl)
    .then((response) => response.text())
    .then((newPageHtml) => {
      document.body.innerHTML = newPageHtml;
    });
}

export { navigateToNewPage };
