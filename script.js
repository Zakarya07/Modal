let modalBtn=document.querySelector(".modal_button");
let modalBg=document.querySelector(".modal_bg");
let modal=document.querySelector(".modal");
let closeModal=document.querySelector(".close_modal");
let placeholderName=document.querySelector("input[type='text']");

modalBtn.addEventListener('click',()=>{
modalBg.classList.add("bg_opacity","bg_visibility");

setTimeout(() => {
    modal.style="opacity:1;height:70%;";
}, 500);

});

closeModal.addEventListener('click',()=>{
    modal.style="";
    modalBg.classList.remove("bg_opacity");
    setTimeout(()=>{
        modalBg.classList.remove("bg_visibility");
        placeholderName.value="";      
    },500)
});

