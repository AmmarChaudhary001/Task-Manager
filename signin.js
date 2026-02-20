const email=document.querySelector("#email");
const password=document.querySelector("#password");
const login_btn=document.querySelector("#Login");
const signup_btn=document.querySelector("#signup");


let signup_arr2=JSON.parse(localStorage.getItem("signups"))||[];


signup_btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
   
    setTimeout(()=>{
         window.location.href="signup.html";
    },2000);
});


login_btn.addEventListener("click", (evt)=>{
   evt.preventDefault();

   const email_input1=email.value;
   const pass_input1=password.value;

   let isvaliduser=false;
   for(let user of signup_arr2){
        if(user.user_mail===email_input1&&
            user.user_key===pass_input1){
                isvaliduser=true;
                break;
            }
   }
        if(isvaliduser){
            setTimeout(()=>{
                window.location.href="display.html"
            },2000);
        }else{
            alert("Your passowrd or email isn't correct");
            return;
        }
})




