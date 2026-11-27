(function () {
    "use strict";

    const key = "kultura-nav-indicator";
    const flightClass = "nav-indicator-flight";
    let pending = null;

    try {
        pending = JSON.parse(sessionStorage.getItem(key) || "null");
        if (!pending || Date.now() - pending.time > 20000) {
            sessionStorage.removeItem(key);
            pending = null;
        } else {
            document.documentElement.classList.add(flightClass);
        }
    } catch {
        pending = null;
    }

    document.addEventListener("DOMContentLoaded", function () {
        const nav = document.querySelector("#main-nav");
        const przyciskMenu = document.querySelector(".menu-toggle");

        document.querySelectorAll(".logo-frame img").forEach(function (obrazek) {
            function aktualizujLogo() {
                const poprawnyObrazek = obrazek.naturalWidth > 0;
                obrazek.hidden = !poprawnyObrazek;
                obrazek.previousElementSibling.hidden = poprawnyObrazek;
            }
            obrazek.addEventListener("load", aktualizujLogo);
            obrazek.addEventListener("error", aktualizujLogo);
            if (obrazek.complete) aktualizujLogo();
        });

        if (przyciskMenu && nav) {
            document.documentElement.classList.add("nav-enhanced");
            const telefon = window.matchMedia("(max-width: 760px)");
            function zamknijMenu() {
                nav.classList.remove("is-open");
                przyciskMenu.setAttribute("aria-expanded", "false");
                przyciskMenu.textContent = "Menu";
            }
            function dopasujMenu() {
                przyciskMenu.hidden = !telefon.matches;
                zamknijMenu();
            }
            przyciskMenu.addEventListener("click", function () {
                const otwarte = nav.classList.toggle("is-open");
                przyciskMenu.setAttribute("aria-expanded", String(otwarte));
                przyciskMenu.textContent = otwarte ? "Zamknij" : "Menu";
            });
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape" && nav.classList.contains("is-open")) {
                    zamknijMenu();
                    przyciskMenu.focus();
                }
            });
            telefon.addEventListener("change", dopasujMenu);
            dopasujMenu();
        }

        if (!nav) return;

        nav.addEventListener("click", function (event) {
            const link = event.target.closest("a");
            if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            const active = nav.querySelector("a[aria-current='page']");
            if (!active || link === active || link.target === "_blank") return;

            const bounds = active.getBoundingClientRect();
            if (bounds.width === 0 || bounds.height === 0) return;

            try {
                sessionStorage.setItem(key, JSON.stringify({
                    left: bounds.left,
                    top: bounds.bottom - 7,
                    width: bounds.width,
                    target: link.textContent.trim(),
                    time: Date.now()
                }));
            } catch {
                // Jeśli pamięć sesji jest zablokowana, nawigacja nadal działa.
            }
        }, true);

        if (!pending) return;

        sessionStorage.removeItem(key);
        const destination = nav.querySelector("a[aria-current='page']");
        if (!destination || destination.textContent.trim() !== pending.target || matchMedia("(prefers-reduced-motion: reduce)").matches) {
            document.documentElement.classList.remove(flightClass);
            return;
        }

        const bounds = destination.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) {
            document.documentElement.classList.remove(flightClass);
            return;
        }

        const indicator = document.createElement("span");
        indicator.className = "nav-transition-indicator";
        indicator.style.left = pending.left + "px";
        indicator.style.top = pending.top + "px";
        indicator.style.width = pending.width + "px";
        document.body.appendChild(indicator);

        const animation = indicator.animate([
            { left: pending.left + "px", top: pending.top + "px", width: pending.width + "px" },
            { left: bounds.left + "px", top: (bounds.bottom - 7) + "px", width: bounds.width + "px" }
        ], {
            duration: 320,
            easing: "cubic-bezier(.2, .75, .25, 1)"
        });

        function finish() {
            indicator.remove();
            document.documentElement.classList.remove(flightClass);
        }

        animation.addEventListener("finish", finish, { once: true });
        animation.addEventListener("cancel", finish, { once: true });
    });
}());
