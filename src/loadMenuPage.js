export default function loadMenuPage() {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  contentDiv.textContent = "MENUPAGE";
}
