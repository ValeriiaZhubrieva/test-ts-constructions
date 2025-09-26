document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll("[data-category]");
  if (filterButtons.length && projects.length) {
    let showAllProjects2 = function() {
      projects.forEach((project) => {
        project.style.display = "grid";
        setTimeout(() => {
          project.style.opacity = "1";
          project.style.transform = "scale(1)";
        }, 200);
      });
    }, filterProjects2 = function(filter) {
      projects.forEach((project) => {
        const categories = project.dataset.category.split(" ");
        const isMatch = categories.includes(filter);
        if (isMatch) {
          project.style.display = "grid";
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "scale(1)";
          }, 200);
        } else {
          project.style.opacity = "0";
          project.style.transform = "scale(0.95)";
          setTimeout(() => {
            project.style.display = "none";
          }, 300);
        }
      });
    };
    var showAllProjects = showAllProjects2, filterProjects = filterProjects2;
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        if (filter === "all") {
          btn.classList.add("is-active");
          showAllProjects2();
        } else {
          btn.classList.add("is-active");
          filterProjects2(filter);
        }
      });
    });
  }
});
