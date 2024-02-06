let users = [
    {id: 1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 2, name: 'Petya', surname: 'Shishkin', grade: '7A'},
    {id: 3, name: 'Sasha', surname: 'Vasiluev', grade: '9B'},
    {id: 4, name: 'Sogdiyar', surname: 'Petrov', grade: 'childrenhouse'},
    {id: 5, name: 'Andrey', surname: 'Tretekov', grade: '110S'},
    {id: 6, name: 'Artem', surname: 'Voronkin', grade: '3Г'},
    {id: 7, name: 'Kirill', surname: 'Andreanov', grade: '41Г'},
    {id: 8, name: 'Kirill', surname: 'Andreanov', grade: '41Г'},
    {id: 9, name: 'Kirill', surname: 'Andreanov', grade: '41Г'},
    {id: 10, name: 'Kirill', surname: 'Andreanov', grade: '41Г'},
]
let win = [3,6]
let nums = [1,2,3,4,5,6,7,8,9,10]
let elem = document.querySelector('.list');
let del = document.querySelector('body');
setTimeout(() => del.hidden = true, 20000)

for (let user of users){
    elem.insertAdjacentHTML('beforeend',
`
    <div class="card" id="${user.id}" onclick="chek_card(${user.id})">
        <h4 class="name">${user.name}</h4>
        <p class="surname">${user.surname}</p>
        <p class="grade">${user.grade}</p>
    </div>
`
    )
}
function hello(id){
    console.log(id)
    document.getElementById(id).hidden = true;
}
function chek_card(id){
    if(win.includes(id)){
        alert('ПОБЕДА')
    }
    else{
        alert('ПРОИГРАЛ')
        setTimeout(() => document.getElementById(id).hidden = true, 1000)
    }
}