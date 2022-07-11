 user = [
    {
        id: 1,
        name: "Admin Shop build",
        address: "Jl. Pemuda Panjaitan 10 Bekasi Utara",
        email: "admin@admin.com",
        DOB: '2002-12-12',
        password: 'admin',
        phoneNumber: '08123456789'
    }
 ]

 userLocal = localStorage.getItem("user");
if(userLocal){
    JSON.parse(userLocal).forEach(data => {
        user.push(data)
    });
}