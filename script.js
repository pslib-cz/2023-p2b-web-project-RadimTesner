function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        document.documentElement.style.backgroundColor = "purple";
    } else {
        menuItems.style.display = "none";
        document.documentElement.style.backgroundColor = "black";
    }
}
