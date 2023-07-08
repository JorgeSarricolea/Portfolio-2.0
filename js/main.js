$(document).ready(function () {
  /* Fucntion to send the user to a new tab
    ----------------*/

  $("#primary-btn").click(function () {
    window.open($(this).attr("href"), "_blank");
  });

  $("#secondary-btn").click(function () {
    window.open($(this).attr("href"), "_blank");
  });

  /* Multilanguaje swith
    ----------------*/

  const flagsElement = $("#flags");
  const textsToChange = $("[data-section]");

  const changeLanguaje = async (languaje) => {
    const requestJson = await fetch(`./languajes/${languaje}.json`);
    const texts = await requestJson.json();

    console.log(texts);
    textsToChange.each(function () {
      const section = $(this).data("section");
      const value = $(this).data("value");

      $(this).html(texts[section][value]);
    });
  };

  flagsElement.on("click", (e) => {
    changeLanguaje(e.target.parentElement.dataset.languaje);
  });

  /* Typing Effect
    ----------------*/

  var typingEffect = new Typed(".multiText", {
    strings: ["Web Developer", "UX/UI Designer", "Graphic Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
  });
});
