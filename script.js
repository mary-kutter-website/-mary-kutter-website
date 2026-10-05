const menuToggle=document.querySelector(".menu-toggle");const navLinks=document.querySelector(".nav-links");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
// Replace only with the verified official donation page selected for the campaign.
const VERIFIED_DONATION_URL="https://www.cancer.org/donate.html";
const donateLink=document.getElementById("donateLink");if(donateLink)donateLink.href=VERIFIED_DONATION_URL;
