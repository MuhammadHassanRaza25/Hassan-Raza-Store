var loginbtn = document.getElementById('loginbtn')
var accountbtn = document.getElementById('accountbtn')

function donebtn(){
    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    localStorage.setItem(`name`,username.value) 
    localStorage.setItem(`email`,email.value)
    localStorage.setItem(`password`,password.value)
    alert('Account Created ✅')
    username.value = ''
    email.value = ''
    password.value = ''
    window.location.href = 'index.html'
}

loginbtn.addEventListener('click',()=>{
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('password')

    var loginE = document.getElementById('loginE').value
    var loginP = document.getElementById('loginP').value

    if(loginE == getemail && loginP == getpass){
        window.open('dashboard.html')
    }
    else{
        alert('Wrong Email or Password ❗')
        loginE = ''
        loginP = ''
    }
})


accountbtn.addEventListener('click',()=>{
    window.location.href = 'account.html'
})

var logoutbtn = document.getElementById('logoutbtn')
function logoutbtn(){
     window.location.href = 'index.html'
}

