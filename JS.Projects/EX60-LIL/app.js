/* ===== PARALLAX SCROLLING WEBSITE ===== */

// DOM Elements
const parallaxLayers = {
  stars: document.getElementById("stars1"),
  moon: document.getElementById("moon2"),
  mountains3: document.getElementById("mountains3"),
  mountains4: document.getElementById("mountains4"),
  river: document.getElementById("river5"),
  boat: document.getElementById("boat6"),
  mountains7: document.getElementById("mountains7"),
  silyaText: document.getElementById("silyaText"),
  hero: document.querySelector(".hero"),
};

// Menu Elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// ===== HAMBURGER MENU FUNCTIONALITY =====
function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeMenu();
    // Update active link
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    closeMenu();
  }
});

// Update active link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// ===== PARALLAX ANIMATION =====
let ticking = false;
let screenWidth = window.innerWidth;
let scrollProgress = 0;

function updateParallax() {
  scrollProgress = window.scrollY;
  const maxScroll = parallaxLayers.hero.offsetHeight;
  const scrollPercentage = Math.min(scrollProgress / maxScroll, 1);

  // Parallax speeds for each layer
  const speeds = {
    stars: 0.3,
    moon: 1.5,
    mountains3: 1.0,
    mountains4: 0.8,
    river: 0.5,
    boat: 1.2,
    mountains7: 0.6,
  };

  // Apply parallax transforms based on scroll
  if (screenWidth > 450) {
    parallaxLayers.stars.style.transform = `translateX(${scrollProgress * speeds.stars}px)`;
    parallaxLayers.moon.style.transform = `translateY(${scrollProgress * speeds.moon}px)`;
    parallaxLayers.mountains3.style.transform = `translateY(${scrollProgress * speeds.mountains3}px)`;
    parallaxLayers.mountains4.style.transform = `translateY(${scrollProgress * speeds.mountains4}px)`;
    parallaxLayers.river.style.transform = `translateY(${scrollProgress * speeds.river}px)`;
    parallaxLayers.boat.style.transform = `translate3d(${scrollProgress * speeds.boat}px, ${scrollProgress * speeds.boat * 0.5}px, 0)`;
    parallaxLayers.mountains7.style.transform = `translateY(${scrollProgress * speeds.mountains7}px)`;
  }

  // SILYA Text Animation
  updateSilyaText(scrollProgress);

  // Background gradient transition
  updateBackgroundGradient(scrollProgress);

  ticking = false;
}

function updateSilyaText(scrollProgress) {
  const textElement = parallaxLayers.silyaText;
  const heroHeight = parallaxLayers.hero.offsetHeight;

  // Start animation after 100px of scroll
  const startScroll = 100;
  const endScroll = heroHeight - 200;

  if (scrollProgress >= startScroll) {
    textElement.classList.add("visible");

    // Calculate progress within animation range
    const animationProgress =
      (scrollProgress - startScroll) / (endScroll - startScroll);
    const clampedProgress = Math.min(animationProgress, 1);

    // Scale from 0.5 to 1.2
    const scale = 0.5 + clampedProgress * 0.7;

    // Opacity from 0 to 1
    const opacity = Math.min(clampedProgress * 1.5, 1);

    // Update text size (responsive)
    const baseFontSize =
      window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 4 : 5;
    const fontSize = baseFontSize + clampedProgress * 2;

    textElement.style.opacity = opacity;
    textElement.style.transform = `translateY(0) scale(${scale})`;
    textElement.style.fontSize = fontSize + "vw";
  } else {
    textElement.classList.remove("visible");
    textElement.style.opacity = 0;
    textElement.style.transform = "translateY(50px) scale(0.5)";
  }

  // Hide text after hero section
  if (scrollProgress > heroHeight) {
    textElement.style.opacity = 0;
    textElement.style.display = "none";
  } else {
    textElement.style.display = "flex";
  }
}

function updateBackgroundGradient(scrollProgress) {
  const heroHeight = parallaxLayers.hero.offsetHeight;
  const scrollRatio = scrollProgress / heroHeight;

  if (scrollRatio > 0.5) {
    const intensity = (scrollRatio - 0.5) * 2;
    parallaxLayers.hero.style.background = `linear-gradient(135deg, 
            rgb(${32 + intensity * 20}, 0, ${22 + intensity * 50}), 
            rgb(16 + intensity * 20}, 0, ${31 + intensity * 40}))`;
  }
}

// ===== OPTIMIZED SCROLL EVENT =====
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  },
  { passive: true },
);

// ===== HANDLE WINDOW RESIZE =====
window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
});

// ===== INTERSECTION OBSERVER FOR CARD ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

document.querySelectorAll(".note-card").forEach((card) => {
  observer.observe(card);
});

// Add fadeInUp animation via CSS injection
if (!document.getElementById("dynamicStyles")) {
  const style = document.createElement("style");
  style.id = "dynamicStyles";
  style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(style);
}

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

console.log("✨ Parallax website loaded successfully!");
console.log("🎨 Smooth animations and responsive design active!");
console.log("🌙 SILYA text will appear as you scroll...");
