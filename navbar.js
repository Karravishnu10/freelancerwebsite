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

// Toggle light background for better readability
function toggleLightBackground() {
  const body = document.body;
  body.classList.toggle("light-background");
  if (body.classList.contains("light-background")) {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
  } else {
    body.style.backgroundColor = "#1f2937";
    body.style.color = "#ffffff";
  }
}

// Toggle negative contrast for users needing high visibility
function toggleNegativeContrast() {
  const body = document.body;
  body.classList.toggle("negative-contrast");
  if (body.classList.contains("negative-contrast")) {
    body.style.backgroundColor = "#000000";
    body.style.color = "#ffff00"; // Yellow text for high contrast
  } else {
    body.style.backgroundColor = "#1f2937";
    body.style.color = "#ffffff";
  }
}

// Toggle a more readable font for accessibility
function toggleReadableFont() {
  const body = document.body;
  body.classList.toggle("readable-font");
  if (body.classList.contains("readable-font")) {
    body.style.fontFamily = "Arial, sans-serif"; // Simple, readable font
    body.style.fontSize = "18px"; // Slightly larger text size
  } else {
    body.style.fontFamily = ""; // Reset to default
    body.style.fontSize = "";
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
