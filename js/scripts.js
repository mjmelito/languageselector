window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let ruby = document.getElementById("ruby");
    ruby.setAttribute("class", "hidden");
    let csharp = document.getElementById("csharp");
    ruby.setAttribute("class", "hidden");
    let javascript = document.getElementById("javascript");
    ruby.setAttribute("class", "hidden");
    let go = document.getElementById("go");
    ruby.setAttribute("class", "hidden");
    let python = document.getElementById("python");
    ruby.setAttribute("class", "hidden");
    let rust = document.getElementById("rust");
    ruby.setAttribute("class", "hidden");
    let swift = document.getElementById("swift");
    ruby.setAttribute("class", "hidden");
  }
}