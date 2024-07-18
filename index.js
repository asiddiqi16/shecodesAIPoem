function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem-body", {
    strings: "This is a poem about love",
    delay: 100,
    autoStart: true,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
