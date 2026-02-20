const email=document.querySelector("#email");
const password=document.querySelector("#password");
const confirmPass=document.querySelector("#con-pass");
const signup_btn=document.querySelector(".btn2");


let signup_arr2=JSON.parse(localStorage.getItem("signups"))||[];


signup_btn.addEventListener("click",(evt)=>{
    evt.preventDefault();

    const email_input2=email.value.trim().toLowerCase();
    const pass_input2=password.value.trim();
    const confirm_key=confirmPass.value.trim();

    
    if(pass_input2!==confirm_key){
        alert("Your Password isn't match");
        return;
    } 
    if(!email_input2||!pass_input2||!confirm_key){
        alert("Please Enter all the fields!");
        return;
    }

    let user_exist=signup_arr2.some((user)=>{
        return user.user_mail===email_input2;
    })

    if(user_exist){
        alert("User is already registered");
        return;
        
    }
    
    const signup_data={
    user_mail:email_input2,
    user_key:pass_input2
}
    signup_arr2.push(signup_data);
    localStorage.setItem("signups",JSON.stringify(signup_arr2));
    alert("Your account is created successfully");
    
    
    setTimeout(()=>{
        window.location.href="signin.html";
    },2000);

}) ;


