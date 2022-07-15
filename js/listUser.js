dataUser = {};

user.forEach(data => {
    if(data.id === parseInt(localStorage.idUser)){
        dataUser = data;
    }
});
space = dataUser.name.indexOf(' ');
document.getElementById('profileName').innerHTML = dataUser.name.substring(0 , space);

function tampilData(dataProduct){
    document.getElementById('table').innerHTML = '';
    document.getElementById('table').innerHTML = `            
        <tr class="border-header">
            <th onclick="sortByNo()" class="bold-table">No</th>
            <th class="bold-table">Foto</th>
            <th onclick="sortByName()" class="bold-table">Name</th>
            <th onclick="sortByEmail()" class="bold-table">Email</th>
            <th onclick="sortByUsername()" class="bold-table">Username</th>
            <th class="bold-table">Action</th>
        </tr>`;

    dataProduct.forEach((data , index)=>{

        const tr = document.createElement('tr');

        const tdNo = document.createElement('td');
        tdNo.innerHTML = index+1
        tr.appendChild(tdNo);

        const tdName = document.createElement('td');
        tdName.innerHTML = `<img src="${data.urlImage}" alt="" class="profile">`
        tr.appendChild(tdName);

        const tdStock = document.createElement('td');
        tdStock.innerHTML = data.name
        tr.appendChild(tdStock);

        const tdBy = document.createElement('td');
        tdBy.innerHTML = data.email
        tr.appendChild(tdBy);

        const tdDate = document.createElement('td');
        tdDate.innerHTML = data.username
        tr.appendChild(tdDate);

        const tdAction = document.createElement('td');
        if(parseInt(data.id) === parseInt(dataUser.id)){
            tdAction.innerHTML = `<img onclick="goToDetail(${data.id})" src="assets/Eye.svg" class="cursor" alt="">`
        }else{
            tdAction.innerHTML = `<img onclick="goToDetail(${data.id})" src="assets/Eye.svg" class="cursor" alt=""><img src="assets/Delete.svg" class="cursor" onclick="goToRemove(${data.id})" alt="">`
        }
        tr.appendChild(tdAction);
        
        document.getElementById('table').appendChild(tr);
    })

}

tampilData(user);

function sortByNo(){
    user.sort((a, b) => {
        return a.id - b.id;
    });
    tampilData(user);
}

function sortByName(){
    user.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(user);
}

function sortByEmail(){
    user.sort((a, b) => {
        let fa = a.email.toLowerCase(),
            fb = b.email.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(user);
}

function sortByUsername(){
    user.sort((a, b) => {
        let fa = a.username.toLowerCase(),
            fb = b.username.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(user);
}

function searchData(){
    const word = document.getElementById('searchWord').value;
    dataRes = [];

    user.forEach(data => {

        name = '';
        user.forEach(dataUser =>{
            if(data.createdBy === dataUser.id){
                name = dataUser.name
            }
        })

        value = `${data.name}${data.address}${data.email}${data.username}`

        if(value.toLowerCase().search(word.toLowerCase()) > -1){
            dataRes.push(data);
        }
    });

    tampilData(dataRes);
}

function goToDetail(id){
    localStorage.setItem('detailUserId', id);
    document.location.href = 'detailUser.html'
}

function goToRemove(id){
    dataArray = [];
    user.forEach(data =>{
        if(parseInt(data.id) === parseInt(id)){

        }else{
            dataArray.push(data);
        }
    })

    console.log(dataArray)

    localStorage.setItem('user', JSON.stringify(dataArray));
    user = dataArray;
    location.reload();
}

