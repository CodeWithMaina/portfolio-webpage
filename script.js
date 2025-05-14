document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", function () {
          navMenu.classList.toggle("active");
          const icon = this.querySelector("i");
          if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
          } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
          }
        });
        const like = document.querySelector(".github-button");

        like.addEventListener("click", function(e){
            alert("Next time I'll take you to GitHub")

            like.reset();
        })
      });