
// powolne przekierowywanie linku 
document.getElementById("more").addEventListener("click", (e) => {
    e.preventDefault();
    var sectionToScroll = document.getElementById("second");
    sectionToScroll.scrollIntoView({ behavior: "smooth" });
});


// zoom i paralaxa 
window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    var height = 100;
    var bgImg = document.getElementById('background-img');

    if ((height + scroll / 10) <= height * 2) {
        var blurAmount = scroll / 10000;

        bgImg.style.height = (height + scroll / 30) + 'vh';
        bgImg.style.marginTop = -(scroll / 1000) + 'px';
        bgImg.style.webkitFilter = 'blur(' + blurAmount + 'px)';
        bgImg.style.filter = 'blur(' + blurAmount + 'px)';
    }
});

//#second

document.addEventListener("DOMContentLoaded", function() {
    const navHeight = document.querySelector("nav").offsetHeight;
    document.getElementById("second").style.paddingTop = navHeight + 20 + "px";
});


//scroll

const as = document.querySelectorAll("#menus a");
const team = document.getElementById("team");
window.onscroll = () => scrollFunction();

function scrollFunction() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  as.forEach((a) => {
    if (scrollTop > 150) {
      a.classList.add("smallFontSize");
      team.style.width="70px";
    } else {
      a.classList.remove("smallFontSize");
      team.style.width="90px";
    }
  });
}



// gdzie jest 

function obliczWysokosci() {
  const main = document.getElementById("main");
  const second = document.getElementById("second");

  let wys_main = main.clientHeight;
  let wys_second = second.clientHeight;

  console.log("Wysokość main: ", wys_main);
  console.log("Wysokość second: ", wys_second);
}

window.addEventListener('load', obliczWysokosci);
