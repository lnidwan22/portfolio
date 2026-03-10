document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll("[data-current-year]").forEach((node) => {
        node.textContent = currentYear;
    });

    const nav = document.querySelector(".site-nav");
    const navToggle = document.querySelector(".nav-toggle");

    if (nav && navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (!contactForm) {
        return;
    }

    const errorNode = document.getElementById("form-error");
    const requiredFields = [
        { id: "full-name", label: "Full Name" },
        { id: "email", label: "Email Address" },
        { id: "country", label: "Country" },
        { id: "comments", label: "Comments" }
    ];

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const missingFields = requiredFields.filter(({ id }) => {
            const field = document.getElementById(id);
            return !field || !field.value.trim();
        });

        if (missingFields.length > 0) {
            errorNode.textContent = `Please fill in all fields before submitting. Missing: ${missingFields.map((field) => field.label).join(", ")}.`;
            return;
        }

        errorNode.textContent = "";
        alert("Form submitted successfully.");
        contactForm.reset();
    });
});
