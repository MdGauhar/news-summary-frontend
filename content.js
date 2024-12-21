chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'extractText') {
      let text = "";
      // Assuming articles are inside <article> tags or similar containers
      const article = document.querySelector("article");
      if (article) {
        text = article.innerText;
      } else {
        // Fallback to body text if no <article> element is found
        text = document.body.innerText;
      }
  
      // Send the text back to the popup.js script
      sendResponse({ text: text });
    }
  });
  