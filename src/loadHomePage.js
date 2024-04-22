import imageSrc from "./images/billys.jpg";

export default function loadHomePage() {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const container = document.createElement("div");
  container.classList.add("container");
  const headingNode = document.createElement("h1");
  const imageNode = document.createElement("img");
  const paraNode = document.createElement("p");
  [headingNode, imageNode, paraNode].forEach((node) =>
    container.appendChild(node)
  );

  headingNode.textContent = "Billy's";
  imageNode.src = imageSrc;
  paraNode.textContent =
    "Billy's is a great restaurant that offers a range variety of dishes from all around the world. Come check us out and you won't be disappointed!";

  contentDiv.appendChild(container);
}
