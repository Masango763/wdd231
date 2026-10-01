document.addEventListener("DOMContentLoaded", () => {
  // Dynamically compute next month's event in real-time
  const now = new Date();
  const nextMonthDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const nextMonthName = monthNames[nextMonthDate.getMonth()];
  const nextMonthYear = nextMonthDate.getFullYear();

  // Update Upcoming Event sidebar content dynamically
  const eventHeading = document.querySelector(".sidebar h3");
  const eventDesc = document.querySelector(".sidebar p");

  if (eventHeading && eventDesc) {
    eventHeading.textContent = `Upcoming Event: ${nextMonthName} ${nextMonthYear}`;
    eventDesc.innerHTML = `Join us for the Annual Chamber Hackathon in <strong>${nextMonthName} ${nextMonthYear}</strong>! Connect with local innovators, build solutions, and expand your network.`;
  }

  // Lazy loading images if applicable
  const images = document.querySelectorAll("img[data-src]");
  const imgOptions = { threshold: 0, rootMargin: "0px 0px 50px 0px" };

  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.src = img.dataset.src;
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
      observer.unobserve(img);
    });
  }, imgOptions);

  images.forEach(img => imgObserver.observe(img));
});
