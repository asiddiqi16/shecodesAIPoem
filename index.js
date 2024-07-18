const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
let context =
  "Assume the poetic style of Rumi. An example Rumi poem is:'This World Which Is Made of Our Love for Emptiness.Praise to the emptiness that blanks out existence. Existence: This place made from our love for that emptiness! Yet somehow comes emptiness,this existence goes.Praise to that happening, over and over! For years I pulled my own existence out of emptiness. Then one swoop, one swing of the arm, that work is over. Free of who I was, free of presence, free of dangerous fear, hope, free of mountainous wanting. The here-and-now mountain is a tiny piece of a piece of straw blown off into emptiness. These words I’m saying so much begin to lose meaning: Existence, emptiness, mountain, straw: Words and what they try to say swept out the window, down the slant of the roof.' When I prompt a topic, please provide a 3 sentence poem as written by Rumi in HTML. Include <br/> after each sentence. Sign the poem at the end as <strong> SheCodes AI </strong> ";

function writePoem(response) {
  let poem = response.data.answer;
  new Typewriter("#poem-body", {
    strings: poem,
    delay: 100,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let prompt = document.querySelector("#prompt");
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt.value}&context=${context}&key=${apiKey}`;
  let poemBody = document.querySelector("#poem-body");
  poemBody.innerHTML = `Generating a ${prompt.value} love poem for you... `;
  axios.get(apiURL).then(writePoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
