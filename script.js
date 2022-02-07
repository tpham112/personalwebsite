const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

      let getMode = localStorage.getItem("mode");
          if (getMode && getMode === "dark-mode") {
            modeToggle.classList.toggle("active");
            body.classList.add("dark");
          }

//   dark/light mode toggle
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active"); // dark/light button
    body.classList.toggle("dark") // color shift

    // to keep user selected mode even when the page is refreshed
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

//   search toggle
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active"); // search button
});

//   side bar toggle
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
})