const btnOpenModal = document.querySelectorAll(".js-open-modal");
const btnCloseModal = document.querySelectorAll(".js-close-modal");

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    let html = document.documentElement;
    html.classList.add("show-modal");
  });
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    let html = document.documentElement;
    html.classList.remove("show-modal");
  });
});
