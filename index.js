function openFancyCliBuildInfoModal() {
  document
    .getElementsByClassName("build")
    .item(0)
    .addEventListener("click", function () {
      const modalContentId = document.getElementById("modal-content");
      if (modalContentId.childNodes.length > 0) {
        const dialogIsOpen = modalContentId.getElementsByTagName("dialog");
        console.log("dialogIsOpen", dialogIsOpen);
        dialogIsOpen.item(0).toggleAttribute("open", "true");
      }
    });
}

function closeFancyCliBuildInfoModal() {
  document
    .getElementsByTagName("dialog")
    .item(0)
    .addEventListener("click", function () {
      const modalContentIdClosed = document.getElementById("modal-content");
      if (modalContentIdClosed.childNodes.length > 0) {
        const dialogIsClosed =
          modalContentIdClosed.getElementsByTagName("dialog");
        dialogIsClosed.item(0).removeAttribute("open");
      }
    });
}

window.onload = function () {
  openFancyCliBuildInfoModal();
  closeFancyCliBuildInfoModal();
};
