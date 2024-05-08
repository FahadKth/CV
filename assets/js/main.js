// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.addEventListener("DOMContentLoaded", (event) => {
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      rootMargin: "0px 0px -40%",
    });
  }
});

function updateActiveNavLink(entries) {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(updateActiveNavLink, {
  rootMargin: "-50px 0px -50px 0px",
  threshold: 0.5,
});
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
