window.addEventListener('scroll',reveal);

function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=200;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//gyaani guruji typer
var typed = new Typed(".auto-type", {
    strings: ["GYAANI GURUJI"],
    typeSpeed: 150,
    backSpeed: 150,
    looped:true,
    onComplete: function (self) {
      self.cursor.remove(); // Remove the blinking cursor after typing is complete
    },

  });
  let header = document.querySelector(".header");
  let navigation = document.querySelector(".navigation");
  let menuToggle = document.querySelector(".menuToggle");

  menuToggle.onclick = function () {
    header.classList.toggle("open");
  };


// function for option selection new navigation bar
function goToPage() {
    var selectBox = document.getElementById("mySelect");
    var selectedValue =
      selectBox.options[selectBox.selectedIndex].value;
    if (screen.width < 800) {
      // For mobile devices, open the PDF in a new tab
      window.open(selectedValue, "_blank");
    } else {
      // For desktop, open the PDF in the same window
      window.location.href = selectedValue;
    }
  }


  //funtion for navigation menu slide bar

  function Menu(e) {
    let list = document.querySelector("ul");
    let homeElements = document.querySelectorAll(".slider > *");
    // e.name === "menu"
    //   ? ((e.name = "close"),
    //     list.classList.add("top-[160px]"),
    //     list.classList.add("opacity-100"),
    //     homeElements.forEach((element) => {
    //       element.style.opacity = "1";
    //     }))
    //   : ((e.name = "menu"),
    //     list.classList.remove("top-[80px]"),
    //     list.classList.remove("opacity-100"));
    //     homeElements.forEach((element) => {
    //       element.style.opacity = "0";
    //     });
    if (e.name === "menu") {
      e.name = "close";
      list.classList.add("top-[160px]");
      list.classList.add("opacity-100");
  
      homeElements.forEach((element) => {
        element.style.opacity = "0";
      });
    } else {
      e.name = "menu";
      list.classList.remove("top-[160px]");
      list.classList.remove("opacity-100");
  
      homeElements.forEach((element) => {
        element.style.opacity = "1"; // Set opacity back to 1 when closing the menu
      });
    }
  }