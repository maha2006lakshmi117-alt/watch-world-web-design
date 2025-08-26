let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}
const allSections = document.querySelectorAll("section");
window.addEventListener("scroll",()=>
{
  allSections.forEach(sec =>
  {
    const secTop=sec.getBoundingClientRect().top;
    if(secTop<window.innerHeight-100){
      sec.classList.add("show");
    }
  });
});
