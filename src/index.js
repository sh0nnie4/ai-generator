function displayquote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9aa8dte54640eadb9ed0cb3f8cboafa2";

  let context =
    "You are a quote expert in every topic and love to write short quotes. Your mission is to generate a quote in bold and quotations in basic HTML. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayquote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
