/* ============================================
   JavaScript - Web Dizajn Agency Site
   ============================================ */

// Initialize animations and interactions on page load
document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  setupEventListeners();
});

// Smooth scroll for anchor links
function initAnimations() {
  // Observe elements for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe feature items for animation
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe industry items for animation
  const industryItems = document.querySelectorAll(".industry-item");
  industryItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.8)";
    item.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
    observer.observe(item);
  });

  // Observe CTA box
  const ctaBox = document.querySelector(".cta-box");
  if (ctaBox) {
    ctaBox.style.opacity = "0";
    observer.observe(ctaBox);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add click tracking for buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      logButtonClick(this.textContent.trim());
    });
  });

  // Add feature item interactivity
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.02)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
    });
  });

  // Add industry item scale effect
  const industryItems = document.querySelectorAll(".industry-item");
  industryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.15)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Sticky header effect
  handleHeaderScroll();
}

// Handle header scroll effect
function handleHeaderScroll() {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      header.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.3)";
    } else {
      header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
    }

    lastScrollTop = scrollTop;
  });
}

// Log button clicks (for analytics)
function logButtonClick(buttonText) {
  console.log(`Button clicked: ${buttonText}`);
  // This could be extended to send data to analytics service
}

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Mobile menu optimization (future feature)
function optimizeMobileExperience() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 768) {
    // Reduce animation complexity on mobile for better performance
    document.querySelectorAll('[style*="animation"]').forEach((element) => {
      element.style.animationDuration = "1s";
    });
  }
}

optimizeMobileExperience();
window.addEventListener("resize", optimizeMobileExperience);

// Add page visibility event for analytics
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("User left the page");
  } else {
    console.log("User returned to the page");
  }
});

// Preload critical images/resources
function preloadResources() {
  // Preload Google Fonts
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);
}

preloadResources();
