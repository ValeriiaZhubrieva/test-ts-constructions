const accordionBlocks = document.querySelectorAll("[data-fls-accordion-block]");
if (accordionBlocks.length) {
  accordionBlocks.forEach((block) => {
    const accordionItems = block.querySelectorAll(".accordion-block__item");
    accordionItems.forEach((item) => {
      const itemToggle = item.querySelector(".accordion-block__toggle");
      if (item.classList.contains("is-open")) {
        itemToggle.classList.add("is-active");
      }
      itemToggle.addEventListener("click", () => {
        item.classList.toggle("is-open");
        itemToggle.classList.toggle("is-active");
      });
    });
  });
}
