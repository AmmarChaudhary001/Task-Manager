const OTP=document.querySelector(".otp")
const email=document.querySelector("#email");
const verify_btn=document.querySelector(".btn");
const password=document.querySelector("#password");


let signup_arr2=JSON.parse(localStorage.getItem("signups"))||[];

let otp_val=Math.floor(Math.random()*10000);
let email_body=`<h2>Your OTP is:</h2>${otp_val}`;

const otp_func=()=>{
    Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: email.value,
        From: "ammarch.cs@gmail.com",
        Subject: "OTP from ZK-Tech Task Manager",
        Body: email_body
    })
    .then(
        (message) => alert("OTP sent to your email"+email.value));

        verify_btn.addEventListener("click",(evt)=>{
            evt.preventDefault();

            otp_func();
            if(OTP.value===otp_val){
                alert(`Email address is Verified!</br>Your account is created successfully...`);

                window.location.href="signin.html";
            }
            else{
                alert("Your email or OTP isn't verified!");
                return;
        }
    }) 

    const email_input2=email.value.trim();
    const pass_input2=password.value.trim();

    const signup_data={
        user_mail:email_input2,
        user_key:pass_input2
}
    signup_arr2.push(signup_data);
    localStorage.setItem("signups",JSON.stringify(signup_arr2));
}


