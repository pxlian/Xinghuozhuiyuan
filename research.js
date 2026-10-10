document.querySelectorAll("[data-open-reader]").forEach((link) => {
    link.addEventListener("click", () => {
        const reader = document.getElementById(link.dataset.openReader);
        if (reader) reader.open = true;
    });
});
