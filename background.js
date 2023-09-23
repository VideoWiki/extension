chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Execute a content script to add an HTML element to the active tab
  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    function: function () {
      // Create a new div element
      console.log(request);
      var newDiv = document.createElement("div");
      newDiv.textContent = "This element was added by the extension.";
      console.log(newDiv);
      // Add the div element to the body of the web page
      document.body.appendChild(newDiv);
    },
  });
});
