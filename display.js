const addbtn=document.querySelector("#add_btn");


addbtn.addEventListener("click",(evt)=>{
    evt.preventDefault();

    setTimeout(()=>{
        window.location.href="Task.html";
    },2000);
})
