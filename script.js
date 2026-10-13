
"use strict";

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Featured store search
// The official website remains the source for the full store directory.
const storeSearch = document.querySelector("#store-search");
const storeCard = document.querySelector(".store-card");
const noResults = document.querySelector("#no-results");

if (storeSearch && storeCard && noResults) {
  storeSearch.addEventListener("input", () => {
    const query = storeSearch.value.trim().toLowerCase();

    const searchableText = [
      "bob",
      "berts",
      "dunfermline",
      "kingsgate",
      "shopping centre",
      "fife",
      "scotland"
    ].join(" ");

    const matches = query === "" || searchableText.includes(query);

    storeCard.hidden = !matches;
    noResults.hidden = matches;
  });
}

// Automatically update the footer year
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
