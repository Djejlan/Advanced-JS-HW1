let userInput = document.getElementById("input1");
let button = document.getElementById("btn1");
let body = document.getElementsByName("body")[0];
let mydiv = document.getElementsByTagName("div")[0];
let movies = ["Eternals", "Brazen", "the Journalist", "Devil's Triangle", "Adam's Family 2", "The lost Daughter", "My Father's Violin"];

button.addEventListener("click", function () {
  if (userInput.value === "") {
    alert("Input cant be empty");
    return;
  }
  if (userInput.value.length < 3) {
    alert("The name cant be less than 3 characters");
    return;
  }
  let lowCaseInput = userInput.value;
  lowCaseInput = lowCaseInput.toLowerCase();
  for (let movie of movies) {
    if (lowCaseInput === movie.toLowerCase()) {
      mydiv.innerHTML = "";
    userInput.value = "";

      let h1 = document.createElement("h1");
      h1.innerText = "The movie can be rented";
      h1.style.color = "green";
      mydiv.appendChild(h1);
      return;
    }
  }
  mydiv.innerHTML = "";
      userInput.value = "";
  let h1 = document.createElement("h1");
  h1.innerText = "The movie can't be rented";
  h1.style.color = "red";
  mydiv.appendChild(h1);
  
});
