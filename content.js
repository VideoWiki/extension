// This content script will run on all web pages.

// Create a new element to append to the page.
const helloWorldElement = document.createElement("div");
helloWorldElement.innerHTML = "<h2 class='swarmHeading'>Hello, World!</h2>";
helloWorldElement.style.display = "none";

// Append the element to the body of the page.
console.log(document);
document.body.appendChild(helloWorldElement);
function swarm() {
  console.log("swarm extension");
}

window.swarm = swarm;
