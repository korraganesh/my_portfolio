  const skillsBtn = document.getElementById("skills-btn");
const experienceBtn = document.getElementById("experience-btn");
const educationBtn = document.getElementById("education-btn");

const skillsContent = document.getElementById("skills-content");
const experienceContent = document.getElementById("experience-content");
const educationContent = document.getElementById("education-content");

skillsBtn.addEventListener("click", function() {
  skillsContent.style.display = "block";
  experienceContent.style.display = "none";
  educationContent.style.display = "none";
});

experienceBtn.addEventListener("click", function() {
  skillsContent.style.display = "none";
  experienceContent.style.display = "block";
  educationContent.style.display = "none";
});

educationBtn.addEventListener("click", function() {
  skillsContent.style.display = "none";
  experienceContent.style.display = "none";
  educationContent.style.display = "block";
});

// MENU BAR

var sidemenu = document.getElementById("sidemenu");

function openmenu(){

  sidemenu.style.right = "0px";


}

function closemenu(){
  sidemenu.style.right = "-300px";
}


// contact
const scriptURL = '<https://script.google.com/macros/s/AKfycbyh5bpDaAOgc7PvdXk6yGvHkwu70zWFxTU14srgFI6rwa6_aEuXRWiE6JTlzJvAs9ow/exec>'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
