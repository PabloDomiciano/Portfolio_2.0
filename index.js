document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Verificar preferência do usuário
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("darkMode", "enabled");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

  // Scroll suave para links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  // Animate on scroll
  const animateElements = document.querySelectorAll(".animate");

  const animateOnScroll = () => {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Executar uma vez ao carregar

  // Animar barras de progresso
  const progressBars = document.querySelectorAll(".progress-bar");

  const animateProgressBars = () => {
    progressBars.forEach((bar) => {
      const level = bar.getAttribute("data-level");
      bar.style.width = level;
    });
  };

  // Observador de interseção para animar apenas quando visível
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const skillsSection = document.querySelector(".skills-section");
  if (skillsSection) {
    observer.observe(skillsSection);
  }

  // Cursor personalizado
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });

    // Efeito ao passar em links e botões
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-item"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursor.style.opacity = "0.5";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.opacity = "1";
      });
    });
  }
});
