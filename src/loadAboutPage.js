export default function loadAboutPage() {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  const container = document.createElement("div");
  container.classList.add("container");
  container.textContent =
    "To anyone reading this, i was too lazy to come up with some information on a made up restaurant. Here's a joke to make up for it: 'I don't trust stairs. They're always up to something.'";
  contentDiv.appendChild(container);
}
