window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("back").removeAttribute("class");

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

    const expUserInput = document.querySelector("input#experience").value;
    const exp = expUserInput.toLowerCase();
    const endUserInput = document.querySelector("input#frontorback").value;
    const end = endUserInput.toLowerCase();
    const brainUserInput = document.querySelector("input#brain").value;
    const brain = brainUserInput.toLowerCase();
    const writeOrArtUserInput = document.querySelector("input#writerartist").value;
    const writeOrArt = writeOrArtUserInput.toLowerCase();
    const workplaceUserInput = document.querySelector("input#workplace").value;
    const workplace = workplaceUserInput.toLowerCase();
    const giftUserInput = document.querySelector("input#gift").value;
    const gift = giftUserInput.toLowerCase();
    
    if (exp === "beginner" && end === "front-end" && brain === "right-brained" && writeOrArt === "writer") {
      document.getElementById("html").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "beginner" && end === "front-end" && brain === "right-brained" && writeOrArt === "artist") {
        document.getElementById("css").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "beginner" && end === "front-end" && brain === "left-brained") {
        document.getElementById("javascript").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "beginner" && end === "back-end") {
        document.getElementById("javascript").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && gift === "bag of coffee" && workplace === "not sure") {
        document.getElementById("java").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && gift === "gemstone" && workplace === "not sure") {
        document.getElementById("ruby").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && gift === "snake" && workplace === "not sure") {
        document.getElementById("python").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && workplace === "google") {
      document.getElementById("go").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && workplace === "microsoft") {
      document.getElementById("csharp").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && (workplace === "apple" || gift === "taylor swift vinyl album")) {
        document.getElementById("swift").removeAttribute("class");
        document.getElementById("quiz").setAttribute("class", "hidden");
        document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "professional" && (workplace === "mozilla" || gift === "old car")) {
      document.getElementById("rust").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else if (exp === "expert") {
      document.getElementById("malbolge").removeAttribute("class");
      document.getElementById("quiz").setAttribute("class", "hidden");
      document.getElementById("warning").setAttribute("class", "hidden");
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};