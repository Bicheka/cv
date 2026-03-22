// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         navLinks.forEach((link) => {
//           link.classList.remove("text-blue-400");
//           if (link.getAttribute("href") === `#${entry.target.id}`) {
//             link.classList.add("text-blue-400");
//           }
//         });
//       }
//     });
//   },
//   {
//     threshold: 0.2, // trigger when 20% visible
//   }
// );

// sections.forEach((section) => observer.observe(section));

// Select all the sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute("id");

      if (activeId) {
        // 1. Update the URL silently without adding a million entries to the browser's back button history
        history.replaceState(null, "", `#${activeId}`);

        // 2. Remove the active styling from all links
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-400", "font-bold");
        });

        // 3. Add the active styling to the correct navigation link
        const activeLink = document.querySelector(
          `.nav-link[href="#${activeId}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("text-blue-400", "font-bold");
        }
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
