async function loadConfig() {
  try {
    const response = await fetch("config.json");
    const config = await response.json();
    return config;
  } catch (error) {
    console.error("Error loading configuration:", error);
    return null;
  }
}

function createLinkbox(linkbox) {
  const linkboxElement = document.createElement("a");
  linkboxElement.href = linkbox.link;
  linkboxElement.className = "linkbox";
  linkboxElement.target = "_blank";
  linkboxElement.rel = "noopener noreferrer";

  const titleElement = document.createElement("div");
  titleElement.className = "linkbox-title";
  titleElement.textContent = linkbox.title;

  const descriptionElement = document.createElement("div");
  descriptionElement.className = "linkbox-description";
  descriptionElement.textContent = linkbox.description;

  linkboxElement.appendChild(titleElement);
  linkboxElement.appendChild(descriptionElement);

  return linkboxElement;
}

function applyStyles(config) {
  document.documentElement.style.setProperty("--main-color", config.mainColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    config.secondaryColor
  );
  document.documentElement.style.setProperty("--text-color", config.textColor);
}

async function initialize() {
  const config = await loadConfig();
  if (!config) return;

  // Apply styles
  applyStyles(config);

  // Set header
  const header = document.getElementById("header");
  header.textContent = config.headerText;

  // Create linkboxes container
  const container = document.getElementById("linkboxes-container");
  container.style.gridTemplateColumns = `repeat(${config.columns}, 1fr)`;

  // Create and append linkboxes
  config.linkboxes.forEach((linkbox) => {
    const linkboxElement = createLinkbox(linkbox);
    container.appendChild(linkboxElement);
  });
}

// Initialize when the page loads
document.addEventListener("DOMContentLoaded", initialize);
