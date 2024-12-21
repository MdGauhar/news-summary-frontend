chrome.runtime.onInstalled.addListener(function () {
    console.log("News Summarizer extension installed!");
  });
  
  chrome.action.onClicked.addListener(function (tab) {
    console.log("Extension icon clicked!");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        console.log('Summarizing...');
      }
    });
  });
  