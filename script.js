let menu_bar = document.getElementById("menu_bar");
let menu_items = document.getElementById("menu_items");

menu_bar.addEventListener("click", () => {
  menu_items.classList.toggle("hidden");
  menu_bar.classList.toggle("hide");
});
