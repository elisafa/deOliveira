document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".videos__seletores button"),o=document.querySelectorAll(".videos iframe");t.forEach(e=>{e.addEventListener("click",function(){t.forEach(e=>{e.classList.remove("videos__seletores__seletor-clicado")}),this.classList.add("videos__seletores__seletor-clicado");var e=this.getAttribute("data-iframe");o.forEach(e=>{e.style.display="none"}),document.getElementById(e).style.display="block"})})});