

// styky scroll code 

window.addEventListener("scroll", function() {
    let mainNav = document.querySelector(".header-area");
  
    if (window.pageYOffset > 200) {
      mainNav.classList.add("is-sticky");
    } else {
      mainNav.classList.remove("is-sticky");
    }
  });
  