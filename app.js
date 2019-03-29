var text = document.getElementById("text");

async function helloWorld() {
  var response = await fetch("/questions");
  var json = await response.json();
  text.innerHTML = json[1].question;
}
