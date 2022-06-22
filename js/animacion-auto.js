const auto = document.querySelector(".auto-animado")

let lastScrollTop = 0;
let movimiento = 0
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop; 
  console.log(window.scrollY)
  if(this.window.screen.width <= 600){
    if(this.window.scrollY > 1350 && this.window.scrollY < 1800)
    if (st > lastScrollTop){
      if(movimiento < 100) movimiento++
    } else {
      if(movimiento > 0) movimiento-=1.7
    }
    auto.style.transform = `translateX(${movimiento}%)`
    console.log(movimiento)
  }

  if(this.window.screen.width > 600){
    if(this.window.scrollY > 1200 && this.window.scrollY < 1900)
    if (st > lastScrollTop){
      if(movimiento < 400) movimiento+=4
    } else {
      if(movimiento > 0) movimiento-=1.7*4
    }
    console.log(movimiento)
    auto.style.transform = `translateX(${movimiento}%)`
  }

  lastScrollTop = st <= 0 ? 0 : st;
}, false);
