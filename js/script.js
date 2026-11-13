
"use strict";

/* =========================================
   1. Mobile Navigation
========================================= */

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
    function closeMobileNav() {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Menü öffnen");
    }

    navToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Menü schließen" : "Menü öffnen"
        );
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" &&
            mainNav.classList.contains("is-open")) {
            closeMobileNav();
            navToggle.focus();
        }
    });

    const desktopQuery = window.matchMedia("(min-width: 68.75rem)");

    function handleDesktopChange(event) {
        if (event.matches) {
            closeMobileNav();
        }
    }

    desktopQuery.addEventListener("change", handleDesktopChange);
}


/* =========================================
   2. Back-to-Top
========================================= */

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    function updateBackToTop() {
        backToTopBtn.classList.toggle(
            "is-visible",
            window.scrollY > 300
        );
    }

    window.addEventListener("scroll", updateBackToTop, {
        passive: true
    });

    updateBackToTop();

    backToTopBtn.addEventListener("click", () => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: reducedMotion ? "auto" : "smooth"
        });
    });
}


/* =========================================
   3. Galerien: Mehr / Weniger anzeigen
========================================= */

document.querySelectorAll(".gallery").forEach((gallery) => {
    const moreButton = gallery.nextElementSibling;

    if (!moreButton?.classList.contains("gallery-more-button")) {
        return;
    }

    const extraFigures = [
        ...gallery.querySelectorAll("figure[hidden]")
    ];

    if (extraFigures.length === 0) {
        moreButton.hidden = true;
        return;
    }

    let isExpanded = false;

    moreButton.setAttribute("aria-expanded", "false");

    moreButton.addEventListener("click", () => {
        isExpanded = !isExpanded;

        extraFigures.forEach((figure) => {
            if (isExpanded) {
                const image = figure.querySelector("img[data-src]");

                if (image) {
                    image.src = image.dataset.src;
                    image.loading = "lazy";
                    image.removeAttribute("data-src");
                }
            }

            figure.hidden = !isExpanded;
        });

        moreButton.textContent = isExpanded
            ? "Weniger anzeigen"
            : "Mehr anzeigen";

        moreButton.setAttribute(
            "aria-expanded",
            String(isExpanded)
        );

        moreButton.setAttribute(
            "aria-label",
            isExpanded
                ? "Zusätzliche Bilder ausblenden"
                : "Weitere Bilder anzeigen"
        );
    });
});


/* =========================================
   4. Lightbox
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.querySelector(".lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let activeGallery = [];
let currentImageIndex = 0;
let touchStartX = null;
let lastFocusedElement = null;

if (
    lightbox &&
    lightboxImage &&
    lightboxCaption &&
    lightboxCounter &&
    closeButton &&
    prevButton &&
    nextButton
) {

    /* Sichtbare Bilder einer Galerie ermitteln */

    function getVisibleButtons(gallery) {
        return [
            ...gallery.querySelectorAll(".gallery-button")
        ].filter((button) => {
            const figure = button.closest("figure");
            return figure && !figure.hidden;
        });
    }


    /* Aktuelles Bild anzeigen */

    function showImage(index) {
        if (activeGallery.length === 0) return;

        currentImageIndex =
            (index + activeGallery.length) % activeGallery.length;

        const button = activeGallery[currentImageIndex];
        const image = button.querySelector("img");
        const figure = button.closest("figure");
        const caption = figure?.querySelector("figcaption");

        if (!image) return;

        lightboxImage.src = image.dataset.src || image.src;
        lightboxImage.alt = image.alt;

        lightboxCaption.textContent =
            caption?.textContent?.trim() || "";

        lightboxCounter.textContent =
            `${currentImageIndex + 1} / ${activeGallery.length}`;
    }


    /* Lightbox öffnen */

    function openLightbox(gallery, button) {
        activeGallery = getVisibleButtons(gallery);

        const index = activeGallery.indexOf(button);

        if (index === -1 || activeGallery.length === 0) {
            return;
        }

        lastFocusedElement = document.activeElement;

        showImage(index);
        lightbox.showModal();

        closeButton.focus();
    }


    /* Lightbox schließen */

    function closeLightbox() {
        if (lightbox.open) {
            lightbox.close();
        }
    }


    /* Fokus nach dem Schließen wiederherstellen */

    lightbox.addEventListener("close", () => {
        if (
            lastFocusedElement?.isConnected &&
            typeof lastFocusedElement.focus === "function"
        ) {
            lastFocusedElement.focus();
        }

        lastFocusedElement = null;
        activeGallery = [];
        touchStartX = null;
    });


    /* Klick auf ein Galeriebild */

    document.querySelectorAll(".gallery").forEach((gallery) => {
        gallery.querySelectorAll(".gallery-button").forEach((button) => {
            button.addEventListener("click", () => {
                openLightbox(gallery, button);
            });
        });
    });


    /* Navigation innerhalb der Lightbox */

    closeButton.addEventListener("click", closeLightbox);

    prevButton.addEventListener("click", () => {
        showImage(currentImageIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentImageIndex + 1);
    });


    /* Tastatursteuerung */

    lightbox.addEventListener("keydown", (event) => {
        if (!lightbox.open) return;

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showImage(currentImageIndex - 1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            showImage(currentImageIndex + 1);
        }
    });


    /* Klick auf den Dialog-Hintergrund */

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });


    /* Touch-Gesten auf Smartphones */

    lightbox.addEventListener("touchstart", (event) => {
        if (!lightbox.open || event.changedTouches.length === 0) {
            return;
        }

        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (event) => {
        if (touchStartX === null ||
            event.changedTouches.length === 0) {
            return;
        }

        const touchEndX = event.changedTouches[0].screenX;
        const difference = touchEndX - touchStartX;

        if (Math.abs(difference) > 50) {
            showImage(
                currentImageIndex + (difference > 0 ? -1 : 1)
            );
        }

        touchStartX = null;
    }, { passive: true });
}
