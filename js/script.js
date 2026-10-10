
"use strict";

/* =========================================
   1. Mobile Navigation
========================================= */

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {

  // Hamburger-Menü öffnen und schließen
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Menü schließen" : "Menü öffnen"
    );
  });

  // Menü nach Auswahl eines Links schließen
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");

      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menü öffnen");
    });
  });
}


/* =========================================
   2. Back-to-Top Button
========================================= */

const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {

  // Button beim Scrollen ein- und ausblenden
  function updateBackToTop() {
    backToTopBtn.classList.toggle(
      "is-visible",
      window.scrollY > 300
    );
  }

  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  // Sichtbarkeit direkt beim Laden prüfen
  updateBackToTop();

  // Zurück nach oben scrollen
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
   3. Lightbox für Galerien
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.querySelector(".lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

// Aktuell geöffnete Galerie
let activeGallery = [];
let currentImageIndex = 0;
let touchStartX = null;

if (
  lightbox &&
  lightboxImage &&
  lightboxCaption &&
  lightboxCounter &&
  closeButton &&
  prevButton &&
  nextButton
) {

  // Bild und Beschriftung aktualisieren
  function showImage(index) {
    if (activeGallery.length === 0) return;

    currentImageIndex =
      (index + activeGallery.length) % activeGallery.length;

    const button = activeGallery[currentImageIndex];
    const image = button.querySelector("img");
    const figure = button.closest("figure");
    const caption = figure.querySelector("figcaption");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightboxCaption.textContent =
      caption ? caption.textContent : "";

    lightboxCounter.textContent =
      `${currentImageIndex + 1} / ${activeGallery.length}`;
  }

  // Lightbox öffnen
  function openLightbox(gallery, index) {
    activeGallery = [
      ...gallery.querySelectorAll(".gallery-button")
    ];

    showImage(index);
    lightbox.showModal();
    closeButton.focus();
  }

  // Lightbox schließen
  function closeLightbox() {
    lightbox.close();
  }

  // Alle Galerien unabhängig voneinander einrichten
  document.querySelectorAll(".gallery").forEach((gallery) => {

    const buttons = [
      ...gallery.querySelectorAll(".gallery-button")
    ];

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        openLightbox(gallery, index);
      });
    });

  });

  // Schließen-Button
  closeButton.addEventListener("click", closeLightbox);

  // Vorheriges Bild
  prevButton.addEventListener("click", () => {
    showImage(currentImageIndex - 1);
  });

  // Nächstes Bild
  nextButton.addEventListener("click", () => {
    showImage(currentImageIndex + 1);
  });

  // Tastatursteuerung
  lightbox.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(currentImageIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentImageIndex + 1);
    }

  });

  // Klick außerhalb des Bildbereichs
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Touch-Gesten auf Smartphones
  lightbox.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (event) => {

    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].screenX;
    const difference = touchEndX - touchStartX;

    if (Math.abs(difference) > 50) {

      if (difference > 0) {
        showImage(currentImageIndex - 1);
      } else {
        showImage(currentImageIndex + 1);
      }

    }

    touchStartX = null;

  }, { passive: true });

}
