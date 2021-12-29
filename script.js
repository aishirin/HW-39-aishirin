const btn=document.getElementById("open");
const modal=document.getElementById("modal");
const closeBtn=document.getElementById("btn")


function openModalWin(){
    modal.style.display="block"
}
btn.addEventListener("click",openModalWin);
function closeModalWin(){
    modal.style.display="none"
}
closeBtn.addEventListener("click",closeModalWin);
