let button = document.querySelector(".btn1");

button.addEventListener("click", function() {
  let div = document.getElementById("newpost");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
});
