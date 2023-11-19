const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const themeOptions = {
  dark: "vs-dark",
  light: "vs-light",
};

const setPageTheme = (themeConstant) => {
  let existingClass = document.body.className;
  existingClass = existingClass.replace(" light", "");
  existingClass = existingClass.replace(" dark", "");
  if (themeConstant === themeOptions.light) {
    document.body.className = existingClass + " light";
  } else if (themeConstant === themeOptions.dark) {
    document.body.className = existingClass + " dark";
  }
};

window.onload = (event) => {
  console.log("page is fully loaded");
  const checkBox = document.getElementById("theme-toggle");
  let editorTheme;

  if (darkThemeMq.matches) {
    editorTheme = themeOptions.dark;
    checkBox.checked = false;
  } else {
    editorTheme = themeOptions.light;
    checkBox.checked = true;
  }
  setPageTheme(editorTheme);
};

darkThemeMq.addEventListener("change", (e) => {
  let theme;

  if (e.matches) {
    theme = themeOptions.dark;
    checkBox.checked = false;
  } else {
    theme = themeOptions.light;
    checkBox.checked = true;
  }
  setPageTheme(editorTheme);
});

function handleThemeToggle() {
  const checkBox = document.getElementById("theme-toggle");

  if (checkBox.checked == true) {
    setPageTheme(themeOptions.light);
  } else {
    setPageTheme(themeOptions.dark);
  }
}
