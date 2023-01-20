function register() {
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    var xh = new XMLHttpRequest();
    xh.open("POST", "http://localhost:3000/user/signup", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send(JSON.stringify(data))
    xh.onload = function () {
        if (this.status == 200) {
            alert('registered successfully! Login to continue')
            window.location.replace('login.html')
        }
        else {
            alert('Failed! Try again')
            window.location.replace('signup.html')
        }
    }
}

/* function login() {
    var data =
    {
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value
    }
    var xh = new XMLHttpRequest();
    xh.open("POST", "http://localhost:3000/user/login", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send(JSON.stringify(data))
    xh.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText)
            
            localStorage.setItem("JWT_Token", "JWT " + data.token)
            localStorage.setItem("NAME" , data.userDetails.name)
            window.location.replace('selection.html')
        }
        else {
            alert('Invalid login credentials')
            window.location.replace('login.html')
        }
    }
} */

/* function login() {
    name1 =  document.getElementById('Name').value
    uniquecode = document.getElementById('UniqueCode').value
    var regEx = /^[0-9a-zA-Z]+$/;

    if (name1==null || name1==""){  
        alert("Name can't be blank");  
        return false;
    }

    if(!uniquecode.value.match(regEx) || uniquecode==null || uniquecode==""){
        alert("Unique Code can't be blank");  
        return false;
    }

    
} */

function getuser() {
    var jwt = localStorage.getItem('JWT_Token')
    const name= localStorage.getItem('NAME')
    var xh = new XMLHttpRequest();
    xh.open("GET", "http://localhost:3000/user/login", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.setRequestHeader('Authorization', jwt)
    xh.send()
    xh.onload = function () {
        if (this.status == 200) {
         
                $('#useritem').append(` <p>Logged In as:</p><p><b>${name}</b></p>`)
       
        }
        else if(this.status==400){
            alert('Error in getting items')
        }
        else if(this.status==401){
            alert('Please authenticate user')
        }
    }

}

