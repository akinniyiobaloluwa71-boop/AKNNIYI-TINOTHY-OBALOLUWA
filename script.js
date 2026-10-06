function initNav() {
  const navToggle = document.querySelector("#navToggle");
  const siteNav = document.querySelector("#siteNav");

  if (!navToggle || !siteNav) {
    return;
  }

  const closeNav = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 769px)").addEventListener("change", closeNav);
}

function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", link.getAttribute("href"));
    });
  });
}

function initForm() {
  const form = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");

  if (!form || !formMessage) {
    return;
  }

  const fields = [
    {
      input: form.querySelector("#name"),
      validate: (value) => value.length >= 2,
      message: "Please enter your name.",
    },
    {
      input: form.querySelector("#email"),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Please enter a valid email.",
    },
    {
      input: form.querySelector("#message"),
      validate: (value) => value.length >= 10,
      message: "Please write a short message.",
    },
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "";
    formMessage.classList.remove("form-message--error");

    let firstInvalidField = null;

    fields.forEach(({ input, validate, message }) => {
      const errorElement = form.querySelector(`[data-error-for="${input.id}"]`);
      const isValid = validate(input.value.trim());

      input.setAttribute("aria-invalid", String(!isValid));
      input.closest(".field").classList.toggle("error", !isValid);
      errorElement.textContent = isValid ? "" : message;

      if (!isValid && !firstInvalidField) {
        firstInvalidField = input;
      }
    });

    if (firstInvalidField) {
      formMessage.textContent = "Please check the highlighted fields.";
      formMessage.classList.add("form-message--error");
      firstInvalidField.focus();
      return;
    }

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    formMessage.textContent = "Your email app will open with your message. Send the email to complete your enquiry.";
    window.location.href = `mailto:akinniyiobaloluwa71@gmail.com?subject=${subject}&body=${body}`;
  });
}

function initYear() {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function init() {
  initNav();
  initSmoothScroll();
  initForm();
  initYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
