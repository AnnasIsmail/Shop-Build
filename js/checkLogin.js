const date = new Date();

function createExpires(){
    return date.getTime() + 5000000
}

function checkExpires(){
    if(localStorage.getItem('expiresLogin') > date.getDate()){
        localStorage.setItem("expiresLogin", createExpires());
    }else if(localStorage.getItem('expiresLogin') === 'infinite'){

    }else{
        logOut();
        document.location.href = 'login.html'
    }
}

if(localStorage.getItem('expiresLogin')){
    checkExpires();
}

function checkLogin(){
    if(localStorage.getItem('login') === null || localStorage.getItem('idUser') === null || localStorage.getItem('expiresLogin') === null){
        if(login === 'after'){
            if(page !== 'login'){
                document.location.href = 'login.html';
            }
        }
    }else{
        if(login === 'before'){
            if(page !== 'dashboard'){
               document.location.href = 'dashboard.html';
            }
        }
    }
}

function logOut(){
    localStorage.removeItem('expiresLogin');
    localStorage.removeItem('idUser');
    localStorage.removeItem('login');
    document.location.href = 'index.html';
}