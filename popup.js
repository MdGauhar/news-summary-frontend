document.getElementById('summarizeBtn').addEventListener('click', function () {
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tabUrl = tabs[0].url;
  
      // Extract the text content of the article
      chrome.tabs.sendMessage(tabs[0].id, { action: 'extractText' }, function (response) {
        if (response && response.text) {
          // Send the text to the backend for summarization
          fetch('http://localhost:8080/api/summarize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: response.text })
          })
          .then(response => response.json())
          .then(data => {
            // Show the summary
            document.getElementById('summary').textContent = data.summary;
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
      });
    });
  });
  