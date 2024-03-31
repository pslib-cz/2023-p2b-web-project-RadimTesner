function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        document.documentElement.style.background = "linear-gradient(to bottom, rgba(91, 37, 180, 1), rgba(66, 91, 169, 1), rgba(44, 138, 159, 1))";
        document.documentElement.style.backgroundAttachment = "fixed";
    } else {
        menuItems.style.display = "none";
        document.documentElement.style.background = "black";
    }
}
