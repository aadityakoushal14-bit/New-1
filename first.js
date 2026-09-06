let create = document.createElement("h1");
create.innerHTML = "Welcome to Mind Coders!";
document.body.appendChild(create); 
let name =prompt("Enter your name:");
let greeting = document.createElement("h2");
greeting.innerHTML = "Hello, " + name + "! Welcome to Mind Coders.";
document.body.appendChild(greeting);
//This is the end to ask a name to user enter.
let link = document.createElement("a");//This is the first link
link.style.display = "block";
link.style.textAlign = "center";
link.href = "https://gitHub.com";
link.innerHTML = "GitHub";
document.body.appendChild(link);
let link1 = document.createElement("a");//This is the second link
link1.style.display = "block";
link1.style.textAlign = "center";
link1.href = "https://google.com";
link1.innerHTML = "Google";
document.body.appendChild(link1);
let form = document.getElementById("languageForm");
let submitBtn = document.getElementById("submitBtn");
let allCheckbox = document.querySelectorAll('input[type="checkbox"]');

// 1. Button ko ON/OFF karna
allCheckbox.forEach(box => {
  box.addEventListener("change", () => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    submitBtn.disabled = !checked; // agar tik hai to false (ON), nahi to true (OFF)
  });
});

// 2. Bina tik ke form submit hone se rokna - ye sabse important hai
form.addEventListener("submit", function(e){
  let checked = document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
  
  if(!checked){
    e.preventDefault(); // form ko roko
    alert("Pehle ek language select karo!");
  } else {
    e.preventDefault(); // page reload rokne ke liye
    window.location.href = "https://mindcoders.com"; // teri link khulegi
  }
});