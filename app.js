const roles = [
  "Web Developer",
  "Software Developer",
  "Web Designer",
  "Photographer",
  "Cricketer"
];

const typedText = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typedText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 60); // typing speed
  } else {
    setTimeout(() => {
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typedText.textContent = "";
      typeRole();
    }, 1200); // wait before switching to next role
  }
}

typeRole(); // start typing
