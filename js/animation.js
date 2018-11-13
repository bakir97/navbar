document.querySelector(".menu").addEventListener("click", open);

function open() {
  document.getElementById("fullMenu").classList.remove("none");
  document.getElementById("fullMenu").classList.add("fullMenu");
  document.body.style.overflow = "hidden";
}
document.querySelector(".close").addEventListener("click", close);

function close() {
  document.getElementById("fullMenu").classList.remove("fullMenu");
  document.getElementById("fullMenu").classList.add("none");
  document.body.style.removeProperty("overflow");
}

const list = document.getElementsByTagName("li");
for (let index = 0; index < list.length; index++) {
  document.getElementsByTagName("li")[index].addEventListener("click", close);
}
console.log(window);

if (window.location.pathname == "/index.html") {
  console.log("aloo");

  document.getElementsByTagName("a")[0].style.color = "red";
}
if (window.location.pathname == "/drugi.html") {
  console.log("aloo");

  document.getElementsByTagName("a")[1].style.color = "red";
}
window.sr = ScrollReveal();
sr.reveal(".biceps-picture", {
  duration: "2000",
  origin: "top",
  distance: "300px"
});
sr.reveal(".biceps-text", {
  duration: "2000",
  origin: "bottom",
  distance: "300px"
});
window.addEventListener("click", e => {
  console.log(e);
  if (e.target.id === "container") {
    console.log("jest");
  }
});
