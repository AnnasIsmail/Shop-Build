dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);


document.getElementById('name').value = dataUser.name;
document.getElementById('username').value = dataUser.username;
document.getElementById('address').value = dataUser.address;
document.getElementById('email').value = dataUser.email;
document.getElementById('DOB').value = dataUser.DOB;
document.getElementById('pn').value = dataUser.phoneNumber;
document.getElementById('lastLogin').value = dataUser.lastLogin;

function goToProfile(){
    document.location.href = 'profile.html';
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
        
        src = dataUser.urlImage

        if(document.getElementById('urlImage').value !== ""){
            lastIndex = document.getElementById('urlImage').value.lastIndexOf("\\");
            src = "assets/" + document.getElementById('urlImage').value.substring(lastIndex+1);
        }

        password = '';

        if(password === ""){
            password = dataUser.password
        }else{
            password = document.getElementById('password')
        }

        dataAfterEdit = {
            id: parseInt(dataUser.id),
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
            DOB: document.getElementById('DOB').value,
            password: password,
            phoneNumber: document.getElementById('pn').value,
            lastLogin: dataUser.lastLogin,
            urlImage: src
        };
        
        dataUserAfterAdd = [];

        user.forEach(data => {
            if(data.id === parseInt(dataUser.id)){
                dataUserAfterAdd.push(dataAfterEdit);
            }else{
                dataUserAfterAdd.push(data);
            }
        });


        localStorage.setItem('user', JSON.stringify(dataUserAfterAdd));
        user.push(dataUserAfterAdd);
        goToProfile();
    }
}
