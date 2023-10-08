window.onload = () => {

  const hamburger = document.querySelector("#hamburgerBtn");
  const bar1 = document.querySelector(".bar1");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");
  const mobileView = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", () => {
    bar1.classList.toggle("bar1-active");
    bar2.classList.toggle("bar2-active");
    bar3.classList.toggle("bar3-active");

    document.querySelector(".headerContainer").classList.toggle("backDrop");
    mobileView.classList.toggle("mobile_navIsactive");
  });
  // Scroll event
  window.addEventListener("scroll", () => {
    mobileView.classList.remove("mobile_navIsactive");
    bar1.classList.remove("bar1-active");
    bar2.classList.remove("bar2-active");
    bar3.classList.remove("bar3-active");
    document.querySelector(".headerContainer").classList.remove("backDrop");

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });





  
};
