validationUName = false;
validationAddress = false;
validationEmail = false;
validationDOB = false;
validationPassword = false;
validationPhoneNumber = false;

Name = false;
Address = false;
Email = false;
DOB = false;
Password = false;
PhoneNumber = false;

function validationRegister(){
    if(validationUName === false || validationAddress === false || validationEmail === false || validationDOB === false || validationPassword === false || validationPhoneNumber === false){
        console.log('masuk')
    }else{
        result = {
            name: Name,
            address: Address,
            email: Email,
            DOB: DOB,
            password: Password,
            phoneNumber: PhoneNumber
        }

        console.log(result)
        document.location.href = 'login.html'
    }
}

function validationRegisterBlur(e){
    let name =  e.name
    let value = e.value

    if(value === ""){
        e.classList.add('error');
        if(name === 'name'){
            validationUsername = false;
            document.getElementById('errorUsername').classList.remove('hidden');
            document.getElementById('errorUsername').innerHTML = 'Field Name tidak boleh kosong';
        }else if(name === 'address'){
            validationPassword = false
            document.getElementById('errorAddress').classList.remove('hidden');
            document.getElementById('errorAddress').innerHTML = 'Field Address tidak boleh kosong';
        }else if(name === 'email'){
            validationEmail = false;
            document.getElementById('errorEmail').classList.remove('hidden');
            document.getElementById('errorEmail').innerHTML = 'Field Email tidak boleh kosong';
        }else if(name === 'DOB'){
            validationDOB = false;
            document.getElementById('errorDOB').classList.remove('hidden');
            document.getElementById('errorDOB').innerHTML = 'Tanggal Lahir tidak boleh kosong';
        }else if(name === 'password'){
            validationPassword = false
            document.getElementById('errorPassword').classList.remove('hidden');
            document.getElementById('errorPassword').innerHTML = 'Field Password tidak boleh kosong';
        }else if(name === 'phone-number'){
            validationPassword = false
            document.getElementById('errorPhoneNumber').classList.remove('hidden');
            document.getElementById('errorPhoneNumber').innerHTML = 'Field Phone Number tidak boleh kosong';
        }
    }else{
        if(name === 'name'){
            Name = value;
            validationNameFunction();
        }else if(name === 'address'){
            Address = value;
            validationAddressFunction();
        }else if(name === 'email'){
            Email = value;
            validationEmailFunction();
        }else if(name === 'DOB'){
            DOB = value;
            validationDOBFunction();
        }else if(name === 'password'){
            Password = value;
            validationPasswordFunction();
        }else if(name === 'phone-number'){
            PhoneNumber= value;
            validationPhoneNumberFunction();
        }
    }

}

function validationRegisterFocus(e){
    e.classList.remove('error');
    let name =  e.name
    
    if(name === 'name'){
        document.getElementById('errorUsername').classList.add('hidden');
    }else if(name === 'address'){
        document.getElementById('errorAddress').classList.add('hidden');
    }else if(name === 'email'){
        document.getElementById('errorEmail').classList.add('hidden');
    }else if(name === 'DOB'){
        document.getElementById('errorDOB').classList.add('hidden');
    }else if(name === 'password'){
        document.getElementById('errorPassword').classList.add('hidden');
    }else if(name === 'phone-number'){
        document.getElementById('errorPhoneNumber').classList.add('hidden');
    }
}

function validationNameFunction(){
    if(Name.length <= 8){
        document.getElementById('errorUsername').classList.remove('hidden');
        document.getElementById('errorUsername').innerHTML = 'Name harus berisi lebih dari 8 karakter!';
    }else{
        validationUName = true;
    }
}

function validationAddressFunction(){
    if(Address.length <= 15){
        document.getElementById('errorAddress').classList.remove('hidden');
        document.getElementById('errorAddress').innerHTML = 'Address harus lebih dari 15 karakter!';
    }else{
        validationAddress = true;
    }
}

function validationEmailFunction(){
    listEmail = ['.com','.id','.ac','.ac.id','.co.id'];
    validationEmail = false;

    listEmail.forEach(format=>{
        if(Email.lastIndexOf(format) !== -1){
            validationEmail = true;
        }
    })

    if(Email.lastIndexOf('@') == -1){
        validationEmail = false;
    }

    if(validationEmail === false){
        document.getElementById('errorEmail').classList.remove('hidden');
        document.getElementById('errorEmail').innerHTML = 'Email harus sesuai format!';
    }
}

function validationDOBFunction(){
    date = new Date();
    age = date.getFullYear() - parseInt(DOB.substring(0,4));

    if(age <= 5 || age >= 100 ){
        document.getElementById('errorDOB').classList.remove('hidden');
        document.getElementById('errorDOB').innerHTML = 'Tanggal Lahir harus lebih dari 5 tahun dan kurang dari 100 tahun dari tahun ini.';
    }else{
        validationDOB = true;
    }
}

function validationPasswordFunction(){
    if(Password.length < 8 || Password.length > 10){
        document.getElementById('errorPassword').classList.remove('hidden');
        document.getElementById('errorPassword').innerHTML = 'Password harus lebih dari 8 dan kurang atau sama dengan 10';
    }else if(Password.match(/^[A-Z0-9]+$/)){
        document.getElementById('errorPassword').classList.remove('hidden');
        document.getElementById('errorPassword').innerHTML = 'Password harus mengandung huruf kecil';
    }else if(Password.match(/^[a-z0-9]+$/)){
        document.getElementById('errorPassword').classList.remove('hidden');
        document.getElementById('errorPassword').innerHTML = 'Password harus mengandung huruf besar';
    }else if(Password.match(/^[a-zA-Z]+$/)){
        document.getElementById('errorPassword').classList.remove('hidden');
        document.getElementById('errorPassword').innerHTML = 'Password harus mengandung angka';
    }else{
        validationPassword = true;
    }
}

function validationPhoneNumberFunction(){
    if(PhoneNumber.length < 3 || PhoneNumber.length > 13){
        document.getElementById('errorPhoneNumber').classList.remove('hidden');
        document.getElementById('errorPhoneNumber').innerHTML = 'Phone Number harus lebih dari 3 angka dan kurang dari 13';
    }else{
        validationPhoneNumber = true;
    }
}
