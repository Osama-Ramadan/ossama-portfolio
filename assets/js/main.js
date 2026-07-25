const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const pageToKey = {
  "index.html": "home",
  "": "home",
  "research.html": "research",
  "publications.html": "publications",
  "projects.html": "projects",
  "cv.html": "cv",
};

const path = window.location.pathname.split("/").pop() || "index.html";
const activeKey = pageToKey[path];

if (activeKey) {
  const activeLink = document.querySelector(`[data-nav="${activeKey}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}
