const btnMenu = document.querySelectorAll(".js-btn-menu");
const menuItem = document.querySelectorAll(".js-menu");

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    menuItem.forEach((item) => {
      item.classList.remove("active");
      item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
        btnMenu.forEach((item) => {
          item.classList.remove("active");
        });
      });
    });

    btnMenu.forEach((item) => {
      item.classList.remove("active");
    });

    btn.classList.add("active");
    menuItem[index].classList.add("active");
  });
});
