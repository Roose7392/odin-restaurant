export default function loadAboutPage() {
  const contentDiv = document.getElementById("content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  contentDiv.textContent = "ABOUTPAGE";
}
