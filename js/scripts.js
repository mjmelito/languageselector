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
      document.getElementById("malbolge").setAttribute("class", "hidden");
    }
    hideResultsAndError();

    const exp = document.querySelector("input#experience").value;
    const end = document.querySelector("input#frontorback").value;
    const brain = document.querySelector("input#brain").value;
    const writeOrArt = document.querySelector("input#writerartist").value;
    const workplace = document.querySelector("input#workplace").value;
    const gift = document.querySelector("input#gift").value;
    
    if ((exp === "Beginner" || exp === "beginner") && (end === "front-end"|| end === "Front-End") && (brain === "right-brained" || brain === "Right-brained") && (writeOrArt === "writer" || writeOrArt === "Writer")) {
      document.getElementById("html").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Beginner" && end === "front-end" && brain === "right-brained" && writeOrArt === "artist") {
        document.getElementById("css").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Beginner" && end === "front-end" && brain === "left-brained") {
        document.getElementById("javascript").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Beginner" && end === "back-end") {
        document.getElementById("javascript").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && gift === "bag of coffee" && workplace === "not sure") {
        document.getElementById("java").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && gift === "gemstone" && workplace === "not sure") {
        document.getElementById("ruby").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && gift === "snake" && workplace === "not sure") {
        document.getElementById("python").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && workplace === "Google") {
      document.getElementById("go").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && workplace === "Microsoft") {
      document.getElementById("csharp").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && (workplace === "Apple" || gift === "Taylor Swift vinyl album")) {
        document.getElementById("swift").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Professional" && (workplace === "Mozilla" || gift === "old car")) {
      document.getElementById("rust").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "Master") {
      document.getElementById("malbolge").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};