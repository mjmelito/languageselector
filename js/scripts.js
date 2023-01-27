window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    function hideResultsAndError() {
      document.getElementById("error-message").setAttribute("class", "hidden");
      document.getElementById("ruby").setAttribute("class", "hidden");
      document.getElementById("csharp").setAttribute("class", "hidden");
      document.getElementById("javascript").setAttribute("class", "hidden");
      document.getElementById("go").setAttribute("class", "hidden");
      document.getElementById("python").setAttribute("class", "hidden");
      document.getElementById("rust").setAttribute("class", "hidden");
      document.getElementById("swift").setAttribute("class", "hidden");
      document.getElementById("html").setAttribute("class", "hidden");
      document.getElementById("css").setAttribute("class", "hidden");
      document.getElementById("java").setAttribute("class", "hidden");
      document.getElementById("malboge").setAttribute("class", "hidden");
    }
    hideResultsAndError();

    const exp = document.querySelector("input#experience").value;
    const end = document.querySelector("input#frontorback").value;
    const brain = document.querySelector("input#brain").value;
    const writeOrArt = document.querySelector("input#writerartist").value;
    const workplace = document.querySelector("input#workplace").value;
    const gift = document.querySelector("input#gift").value;
    
    if (exp === "Beginner" && end === "front-end" && brain === "right-brained" && writeOrArt === "writer") {
      document.getElementById("html").removeAttribute("class");
    } else if (exp === "Beginner" && end === "front-end" && brain === "right-brained" && writeOrArt === "artist") {
        document.getElementById("css").removeAttribute("class");
    } else if (exp === "Beginner" && end === "front-end" && brain === "left-brained") {
        document.getElementById("javascript").removeAttribute("class");
    } else if (exp === "Beginner" && end === "back-end") {
        document.getElementById("javascript").removeAttribute("class");
    } else if (exp === "Professional" && gift === "bag of coffee" && workplace === "not sure") {
        document.getElementById("java").removeAttribute("class");
    } else if (exp === "Professional" && gift === "gemstone" && workplace === "not sure") {
        document.getElementById("ruby").removeAttribute("class");
    } else if (exp === "Professional" && gift === "snake" && workplace === "not sure") {
        document.getElementById("python").removeAttribute("class");
    } else if (exp === "Professional" && workplace === "Google") {
      document.getElementById("go").removeAttribute("class");
    } else if (exp === "Professional" && workplace === "Microsoft") {
      document.getElementById("csharp").removeAttribute("class");
    } else if (exp === "Professional" && (workplace === "Apple" || gift === "Taylor Swift vinyl album")) {
        document.getElementById("swift").removeAttribute("class");
    } else if (exp === "Professional" && (workplace === "Mozilla" || gift === "old car")) {
      document.getElementById("rust").removeAttribute("class");
    } else if (exp === "Master") {
      document.getElementById("malboge").removeAttribute("class");
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};