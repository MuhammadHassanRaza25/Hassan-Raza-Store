var loginbtn = document.getElementById('loginbtn')
var accountbtn = document.getElementById('accountbtn')

// set name,email,pass in localStorage functionality
function donebtn(){
    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    localStorage.setItem(`name`,username.value) 
    localStorage.setItem(`email`,email.value)
    localStorage.setItem(`password`,password.value)
    Swal.fire({
        title: "Account Created",
        icon: "success"
      });
    username.value = ''
    email.value = ''
    password.value = ''

    // creating new button
    var divbtn = document.getElementById('divbtn')
    divbtn.innerHTML += `<button class="gotobtn" id="goto">◀ Go to Login Page</button>`
    var goto  = document.getElementById('goto')
    goto.addEventListener('click',()=>{
        window.location.href = 'index.html'
    })
}

// login button functionality
loginbtn.addEventListener('click',()=>{
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('password')

    var loginE = document.getElementById('loginE')
    var loginP = document.getElementById('loginP')

    if(loginE.value == getemail && loginP.value == getpass){
        window.open('dashboard.html')
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Email or Password Not Found!",
          });
        loginE.value = ''
        loginP.value = ''
    }
})

// go to create account page button
accountbtn.addEventListener('click',()=>{
    window.location.href = 'account.html'
})

// logout button
var logoutbtn = document.getElementById('logoutbtn')
function logoutbtn(){
    window.close()
}


// Cards Functionality start

// Cards Functionality end


// add to cart Functionality start

// add to cart Functionality end