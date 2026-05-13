script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("VP Pre Owned Cars Website Loaded");
  /* =========================
     Sticky Navbar Shadow
  ========================== */
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
      navbar.style.transition = "0.3s";
    }
    else{
      navbar.style.boxShadow = "none";
    }
  });
  /* =========================
     Smooth Scroll
  ========================== */
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if(targetId.startsWith("#")){
        const targetSection = document.querySelector(targetId);
        if(targetSection){
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });
  /* =========================
     Featured Car Hover Effect
  ========================== */
  const carCards = document.querySelectorAll(".car-card");
  carCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-12px)";
      card.style.transition = "0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
    });
  });
  /* =========================
     Search Button Interaction
  ========================== */
  const searchButton = document.querySelector(".search-box button");
  searchButton.addEventListener("click", () => {
    const selects = document.querySelectorAll(".search-box select");
    const make = selects[0].value;
    const model = selects[1].value;
    const budget = selects[2].value;
    if(make === "Select Make"){
      alert("Please select a car make.");
      return;
    }
    if(budget === "Select Budget"){
      alert("Please select your budget.");
      return;
    }
    alert(`
Searching Cars
Make: ${make}
Model: ${model}
Budget: ${budget}
    `);
  });
  /* =========================
     Form Validation
  ========================== */
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input");
    const name = inputs[0].value.trim();
    const phone = inputs[1].value.trim();
    const brand = inputs[2].value.trim();
    const model = inputs[3].value.trim();
    if(name === ""){
      alert("Please enter your name.");
      return;
    }
    if(phone.length < 10){
      alert("Please enter a valid phone number.");
      return;
    }
    if(brand === ""){
      alert("Please enter your car brand.");
      return;
    }
    if(model === ""){
      alert("Please enter your car model.");
      return;
    }
    alert(`
Thank You ${name}!
Your car valuation request has been submitted successfully.
Our team will contact you shortly on:
${phone}
    `);
    form.reset();
  });
  /* =========================
     Animated Counter Effect
  ========================== */
  function animateValue(element, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
      if(!startTimestamp){
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start);
      if(progress < 1){
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  /* =========================
     Create Dynamic Stats
  ========================== */
  const statsSection = document.createElement("section");
  statsSection.classList.add("stats-section");
  statsSection.innerHTML = `
  
    <div class="stats-container">
      <div class="stat-box">
        <h2 id="carsSold">0</h2>
        <p>Cars Sold</p>
      </div>
      <div class="stat-box">
        <h2 id="happyCustomers">0</h2>
        <p>Happy Customers</p>
      </div>
      <div class="stat-box">
        <h2 id="carsInspected">0</h2>
        <p>Cars Inspected</p>
      </div>
    </div>
  `;
  document.body.insertBefore(
    statsSection,
    document.querySelector(".inspection")
  );
  /* =========================
     Add Dynamic CSS
  ========================== */
  const style = document.createElement("style");
  style.innerHTML = `
    .stats-section{
      padding:100px 8%;
      background:#ffffff;
    }
    .stats-container{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:30px;
    }
    .stat-box{
      background:#ffffff;
      border:1px solid #eeeeee;
      padding:50px;
      border-radius:24px;
      text-align:center;
    }
    .stat-box h2{
      font-size:60px;
      color:#0d6efd;
      margin-bottom:10px;
    }
    .stat-box p{
      font-size:20px;
      font-weight:600;
    }
    @media(max-width:992px){
      .stats-container{
        grid-template-columns:1fr;
      }
    }
  `;
  document.head.appendChild(style);
  /* =========================
     Trigger Counter Animation
  ========================== */
  const carsSold = document.getElementById("carsSold");
  const happyCustomers = document.getElementById("happyCustomers");
  const carsInspected = document.getElementById("carsInspected");
  animateValue(carsSold, 0, 1500, 2500);
  animateValue(happyCustomers, 0, 1200, 2500);
  animateValue(carsInspected, 0, 5000, 2500);
  /* =========================
     Button Ripple Effect
  ========================== */
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", function(e){
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  /* =========================
     Ripple CSS
  ========================== */
  const rippleStyle = document.createElement("style");
  rippleStyle.innerHTML = `
    button{
      position:relative;
      overflow:hidden;
    }
    .ripple{
      position:absolute;
      width:20px;
      height:20px;
      background:rgba(255,255,255,0.7);
      border-radius:50%;
      transform:scale(0);
      animation:ripple-animation 0.6s linear;
      pointer-events:none;
    }
    @keyframes ripple-animation{
      to{
        transform:scale(15);
        opacity:0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);
});
