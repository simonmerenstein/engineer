(function () {
  const buttons = document.querySelectorAll("[data-lightbox]");
  if (!buttons.length) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `
    <button type="button" aria-label="Close image">Close</button>
    <figure>
      <img alt="">
      <figcaption></figcaption>
    </figure>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector("img");
  const caption = overlay.querySelector("figcaption");
  const close = overlay.querySelector("button");

  function open(button) {
    const source = button.getAttribute("data-lightbox");
    const text = button.getAttribute("data-caption") || "";
    image.src = source;
    image.alt = text;
    caption.textContent = text;
    overlay.classList.add("is-open");
    close.focus();
  }

  function hide() {
    overlay.classList.remove("is-open");
    image.removeAttribute("src");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => open(button));
  });

  close.addEventListener("click", hide);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) hide();
  });
})();
