export function setActiveLink() {
    var currentLocation = window.location.pathname;
    var navLinks = document.querySelectorAll("a");

    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];
        var linkHref = link.getAttribute("href");

        if (currentLocation === linkHref) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
}