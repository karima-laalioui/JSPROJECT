var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var passwordV = document.getElementById("password").value

var cpassword = document.getElementById("cpassword")
var login_btn=document.getElementById('login-btn');
var user=false;
var em=false;
var pas=false;
var cp=false;

const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const isPasswordSecure = (passwordV) => {
//     const pass = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,35}$)/g");
//     return pass.test(passwordV);
// };

username.addEventListener("keyup", function(){
    var userValue = document.getElementById("username").value;
    function isUserValid (userValue) {
        const user_name=new RegExp("^(?=.{3,20}$)");
        return user_name.test(userValue);
    };
    var user_notif=document.querySelector('.user-notif')
    var username = document.getElementById("username");
    //var userValue = document.getElementById("username").value;
    console.log(isUserValid(userValue))
    if(isUserValid(userValue)) {

        username.classList.add("valid");
        user_notif.classList.add("user-notifi")
        user_notif.classList.remove("user-notifen")
        // window.location.href = "../courses.html";
        
        user=true;
        
        
    }
    else{ 
        username.classList.remove("valid");
        user_notif.classList.remove("user-notifi")
        user_notif.classList.add("user-notifen")
        user=false
    }
})

email.addEventListener('keyup', (event)=>{
    var em_notif=document.querySelector(".em-notif")

    if(email.value.match(isEmailValid))
    {
        email.classList.add("valid");
        em_notif.classList.add('em-notifi')
        em_notif.classList.remove('em-notifen')
        em=true
    }
    else{
        email.classList.remove("valid");
        em_notif.classList.add('em-notifen')
        em_notif.classList.remove('em-notifi')
        em=false
    }
    
})

password.addEventListener('keyup', (event)=>{
    const passwordValue=document.getElementById("password").value
    const password=document.getElementById("password")
    
    const isPasswordSecure = (passwordValue) => {
        const pass = new RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50}$)/g");
        return pass.test(passwordValue);
    };
    const passM = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g
    console.log(isPasswordSecure(passwordValue))
    var pass_notif=document.querySelector('.pass-notif')
    if (password.value.match(passM)) {
        pass_notif.classList.add('pass-notif')
        pass_notif.classList.remove('pass-notifen')
        password.classList.add("valid");
        pas=true
    }
    else{
        pass_notif.classList.add('pass-notifen')
        password.classList.remove("valid")
        pas=false
    }
})
cpassword.addEventListener('keyup', (event)=>{
    const passwordConfiValue= document.getElementById('cpassword').value;
    const passwordValue =document.getElementById('password').value
    var cpass_notif=document.querySelector('.cpass-notif')
    if(passwordConfiValue=== passwordValue)
    {
        
        cpass_notif.classList.add('cpass-notif')
        cpass_notif.classList.remove('cpass-notifen')
        cpassword.classList.add('valid');
        cp=true;
        
    }
    else{
        cpassword.classList.remove('valid');
        cpass_notif.classList.add('cpass-notifen')
        
        cp=false
    }
})


login_btn.addEventListener('click', (event)=>{
    if((pas && cp && user && em)===true )
    {
        // location.replace("../home.html");
        console.log('hey its working')
         window.location.href = "../home.html";
        // location.assign("../home.html");
    }
    else{
        console.log('Nope ')
    }
    
})