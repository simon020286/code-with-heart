const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
  updatePictures(themeValue);
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

function updatePictures(theme) {
  const pictures = document.querySelectorAll("picture");
  pictures.forEach(picture => updatePicture(picture, theme));
}

function updatePicture(picture, theme) {
  const sources = picture.querySelectorAll('source[media*="prefers-color-scheme"], source[data-media*="prefers-color-scheme"]');
  sources.forEach((source) => {
      // Preserve the source `media` as a data-attribute
      // to be able to switch between preferences
      if (source?.media.includes('prefers-color-scheme')) {
        source.dataset.media = source.media
      }
 
      // If the source element `media` target is the `preference`,
      // override it to 'all' to show
      // or set it to 'none' to hide
      if (source?.dataset.media.includes(theme)) {
        source.media = 'all'
      } else if (source) {
        source.media = 'none'
      }
    });
}
// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });