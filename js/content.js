function core() {
  let contentDefaultDom = document.querySelector(".theme-default-content.l .content__default");
  if (contentDefaultDom) {
    contentDefaultDom.style.height = "auto";

    const elements = contentDefaultDom.querySelectorAll(":nth-child(n+33)");
    elements.forEach((element) => {
      if ((element.style.display = "none")) {
        element.style.display = "block";
      }
    });
  }
}

function getTargetDoms() {
  if (window.location.origin === "https://interview.poetries.top") {
    core();
  }
}
getTargetDoms();