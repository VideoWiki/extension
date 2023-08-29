var height = 5;
var width = 5;
var topsss = screen.height;
var left = screen.width - 420;
window.open(
  "http://localhost:3000/",
  "newwin",
  `height=600px,width=600px,left=${left}`
);
window.close();
document.getElementById("appendButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    console.log(activeTab);
    chrome.tabs.executeScript(activeTab.id, {
      code: `
          var newElement = document.createElement('div');
          newElement.innerHTML = '<p>This HTML was appended by the extension!</p>';
          document.body.appendChild(newElement);
        `,
    });
  });
});
