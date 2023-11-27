let userLanguage = localStorage.getItem("language");
if (!userLanguage) {
  userLanguage = "it";
  localStorage.setItem("language", userLanguage);
  } else if (userLanguage !== "it") {
    userLanguage = "it";
    localStorage.setItem("language", userLanguage);
  }

fetch("../assets/json/lang.json")
  .then((response) => response.json())
  .then((data) => updateUI(data));

function selectLanguage(lang) {
  localStorage.setItem("language", lang);
  fetch("../assets/json/lang.json")
    .then((response) => response.json())
    .then((data) => updateUI(data));
}

function updateUI(data) {
  const language = localStorage.getItem("language");
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (data[key]) {
      element.innerHTML = data[key][language];
    }
  });
}
