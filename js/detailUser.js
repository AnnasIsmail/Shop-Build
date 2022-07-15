dataProfile = {};
dataUser = {};

user.forEach(data => {
    if(parseInt(data.id) === parseInt(localStorage.detailUserId)){
        dataUser = data;
    }

    if(parseInt(data.id) === parseInt(localStorage.idUser)){
        dataProfile = data;
    }
});
space = dataProfile.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataProfile.name.substring(0 , space);


document.getElementById('srcImage').src = dataUser.urlImage;
document.getElementById('name').value = dataUser.name;
document.getElementById('username').value = dataUser.username;
document.getElementById('address').value = dataUser.address;
document.getElementById('email').value = dataUser.email;
document.getElementById('DOB').value = dataUser.DOB;
document.getElementById('pn').value = dataUser.phoneNumber;
document.getElementById('lastLogin').value = dataUser.lastLogin;

function goToListUser(){
    document.location.href = 'listUser.html';
}        

function validation(){
    if(document.getElementById('name').value === "" || document.getElementById("address").value  === "" || document.getElementById("email").value  === "" || document.getElementById("DOB").value  === "" || document.getElementById("pn").value === "" || document.getElementById("lastLogin").value  === "" ){
        document.getElementById('errorSubmit').classList.remove('hidden');
        document.getElementById('errorSubmit').innerHTML = 'Pastikan Seluruh Field sudah terisi!';
        return false;
    }else{
        return true;
    }
}

function focuss(){
    document.getElementById('errorSubmit').classList.add('hidden');
}


function submitEdit(){
    
    valid = validation();

    if(valid === true){
        
        password = '';

        if(password === ""){
            password = dataUser.password
        }else{
            password = document.getElementById('password')
        }

        dataAfterEdit = {
            id: parseInt(dataUser.id),
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
            DOB: document.getElementById('DOB').value,
            password: password,
            phoneNumber: document.getElementById('pn').value,
            lastLogin: dataUser.lastLogin
        };
        
        dataUserAfterAdd = [];

        user.forEach(data => {
            dataUserAfterAdd.push(dataAfterEdit);
        });

        dataUserAfterAdd.push(dataAfterEdit);

        localStorage.setItem('user', JSON.stringify(dataUserAfterAdd));
        user.push(dataUserAfterAdd);
        goToListUser();
    }
}
