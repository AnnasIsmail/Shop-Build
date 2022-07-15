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
            <th onclick="sortByName()" class="bold-table">Nama Product</th>
            <th onclick="sortByStock()" class="bold-table">Stock</th>
            <th onclick="sortByCB()" class="bold-table">Dibuat Oleh</th>
            <th onclick="sortByDate()" class="bold-table">Tanggal</th>
            <th class="bold-table">Action</th>
        </tr>`;

    dataProduct.forEach((data , index)=>{

        const tr = document.createElement('tr');

        const tdNo = document.createElement('td');
        tdNo.innerHTML = index+1
        tr.appendChild(tdNo);

        const tdName = document.createElement('td');
        tdName.innerHTML = data.name
        tr.appendChild(tdName);

        const tdStock = document.createElement('td');
        tdStock.innerHTML = data.stock
        tr.appendChild(tdStock);

        const tdBy = document.createElement('td');
        name = '';
        user.forEach(dataUser =>{
            if(data.createdBy === dataUser.id){
                name = dataUser.name
            }
        })

        tdBy.innerHTML = name
        tr.appendChild(tdBy);

        const tdDate = document.createElement('td');
        tdDate.innerHTML = data.createdDate
        tr.appendChild(tdDate);

        const tdAction = document.createElement('td');
        tdAction.innerHTML = `<img onclick="goToDetail(${data.id})" src="assets/Eye.svg" class="cursor" alt=""><img src="assets/Edit.svg" onclick="goToEdit(${data.id})" class="pl cursor" alt=""><img src="assets/Delete.svg" class="cursor" onclick="goToRemove(${data.id})" alt="">`
        tr.appendChild(tdAction);
        
        document.getElementById('table').appendChild(tr);
    })

}

tampilData(product);

function sortByNo(){
    product.sort((a, b) => {
        return a.id - b.id;
    });
    tampilData(product);
}

function sortByName(){
    product.sort((a, b) => {
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
    tampilData(product);
}

function sortByStock(){
    product.sort((a, b) => {
        return a.stock - b.stock;
    });
    tampilData(product);
}

function sortByCB(){
    product.sort((a, b) => {

        nameA = '';
        user.forEach(dataUser =>{
            if(a.createdBy === dataUser.id){
                nameA = dataUser.name
            }
        })

        nameB = '';
        user.forEach(dataUser =>{
            if(b.createdBy === dataUser.id){
                nameB = dataUser.name
            }
        })

        let fa = nameA.toLowerCase(),
            fb = nameB.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    tampilData(product);
}

function sortByDate(){
    product.sort((a, b) => {
        let da = new Date(a.createdDate),
            db = new Date(b.createdDate);
        return da - db;
    });
    tampilData(product);
}

function searchData(){
    const word = document.getElementById('searchWord').value;
    dataRes = [];

    product.forEach(data => {

        name = '';
        user.forEach(dataUser =>{
            if(data.createdBy === dataUser.id){
                name = dataUser.name
            }
        })

        value = `${data.name}${data.price}${data.stock}${name}${data.createdDate}`

        if(value.toLowerCase().search(word.toLowerCase()) > -1){
            dataRes.push(data);
        }
    });

    tampilData(dataRes);
}

function goToDetail(id){
    localStorage.setItem('detailProductId', id);
    document.location.href = 'detailProduct.html'
}

function goToEdit(id){
    localStorage.setItem('detailProductId', id);
    document.location.href = 'editProduct.html'
}

function goToRemove(id){
    dataArray = [];
    product.forEach(data =>{
        if(parseInt(data.id) === parseInt(id)){

        }else{
            dataArray.push(data);
        }
    })

    localStorage.setItem('product', JSON.stringify(dataArray));
    product = dataArray;
    location.reload();
}

function goToAddNewData(){
    document.location.href = 'addNewDataProduct.html'
}
