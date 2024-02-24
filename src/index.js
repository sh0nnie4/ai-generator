function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote goes here",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
