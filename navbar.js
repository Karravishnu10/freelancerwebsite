// Toggle Menu for Accessibility
function toggleMenu() {
  const dropdown = document.getElementById("hamburgerDropdown");
  const expanded = dropdown.getAttribute("aria-expanded") === "true";
  dropdown.style.display = expanded ? "none" : "block";
  dropdown.setAttribute("aria-expanded", !expanded);
}

function toggleAccessibilityPanel() {
  const panel = document.getElementById("accessibilityToolbar");
  if (!panel) {
    console.error("Accessibility toolbar not found.");
    return;
  }
  // Get current aria-hidden state and toggle it
  const isHidden = panel.getAttribute("aria-hidden") === "true";
  panel.setAttribute("aria-hidden", !isHidden);
  // Toggle visibility by changing display property and positioning
  panel.style.display = isHidden ? "block" : "none";
  panel.style.left = isHidden ? "0px" : "-260px";
}

// Increase Text Size
function increaseText() {
  document.body.style.fontSize = "larger";
  localStorage.setItem("fontSize", "larger");
}

// Decrease Text Size
function decreaseText() {
  document.body.style.fontSize = "smaller";
  localStorage.setItem("fontSize", "smaller");
}

// Toggle Grayscale Effect
function toggleGrayscale() {
  if (document.body.classList.contains("grayscale")) {
    document.body.classList.remove("grayscale");
    localStorage.removeItem("grayscale");
  } else {
    document.body.classList.add("grayscale");
    localStorage.setItem("grayscale", "true");
  }
}

// Toggle High Contrast Mode
function toggleHighContrast() {
  if (document.body.classList.contains("high-contrast")) {
    document.body.classList.remove("high-contrast");
    localStorage.removeItem("highContrast");
  } else {
    document.body.classList.add("high-contrast");
    localStorage.setItem("highContrast", "true");
  }
}

// Toggle Negative Contrast Mode
function toggleNegativeContrast() {
  if (document.body.classList.contains("negative-contrast")) {
    document.body.classList.remove("negative-contrast");
    localStorage.removeItem("negativeContrast");
  } else {
    document.body.classList.add("negative-contrast");
    localStorage.setItem("negativeContrast", "true");
  }
}

// Toggle Light Background
function toggleLightBackground() {
  if (document.body.classList.contains("light-background")) {
    document.body.classList.remove("light-background");
    localStorage.removeItem("lightBackground");
  } else {
    document.body.classList.add("light-background");
    localStorage.setItem("lightBackground", "true");
  }
}

// Underline Links
function underlineLinks() {
  const links = document.querySelectorAll("a");
  const underline = localStorage.getItem("linksUnderline") === "true";
  links.forEach((link) => {
    link.style.textDecoration = underline ? "none" : "underline";
  });
  localStorage.setItem("linksUnderline", !underline);
}

// Toggle Readable Font
function toggleReadableFont() {
  if (document.body.classList.contains("readable-font")) {
    document.body.classList.remove("readable-font");
    localStorage.removeItem("readableFont");
  } else {
    document.body.classList.add("readable-font");
    localStorage.setItem("readableFont", "true");
  }
}

// Reset Accessibility Settings
function resetAccessibility() {
  document.body.style.fontSize = "";
  document.body.classList.remove(
    "grayscale",
    "high-contrast",
    "negative-contrast",
    "light-background",
    "readable-font"
  );

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.textDecoration = "none";
  });

  // Clear all saved settings in localStorage
  localStorage.removeItem("fontSize");
  localStorage.removeItem("grayscale");
  localStorage.removeItem("highContrast");
  localStorage.removeItem("negativeContrast");
  localStorage.removeItem("lightBackground");
  localStorage.removeItem("linksUnderline");
  localStorage.removeItem("readableFont");
}

// Function to apply saved settings on page load
function applySavedSettings() {
  const fontSize = localStorage.getItem("fontSize");
  if (fontSize) {
    document.body.style.fontSize = fontSize;
  }

  if (localStorage.getItem("grayscale")) {
    document.body.classList.add("grayscale");
  }

  if (localStorage.getItem("highContrast")) {
    document.body.classList.add("high-contrast");
  }

  if (localStorage.getItem("negativeContrast")) {
    document.body.classList.add("negative-contrast");
  }

  if (localStorage.getItem("lightBackground")) {
    document.body.classList.add("light-background");
  }

  if (localStorage.getItem("readableFont")) {
    document.body.classList.add("readable-font");
  }

  if (localStorage.getItem("linksUnderline") === "true") {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.textDecoration = "underline";
    });
  }
}

// Apply settings on page load
document.addEventListener("DOMContentLoaded", applySavedSettings);
