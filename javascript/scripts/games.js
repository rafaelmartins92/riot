const allFilters = document.querySelectorAll(".js-nav-games li a");
const tabPane = document.querySelectorAll(".tab-pane-games");

allFilters.forEach((filter, index) => {
  filter.addEventListener("click", (event) => {
    event.preventDefault();

    allFilters.forEach((filter) => {
      filter.classList.remove("active");
    });

    tabPane.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabPane[index].classList.add("active");
    filter.classList.add("active");
  });
});
