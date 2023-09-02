// console.dir(document)
// console.log(location)
// console.log(document.URL)
// console.log(document.location)
// var headTitle = document.getElementById('header-title');
// console.log(headTitle.textContent);
// console.log(headTitle.innerText);
// headTitle.style.border = 'solid 2px black';
// headTitle.style.color = 'red';
// headTitle.textContent = 'Hello';
// headTitle.innerHTML = 'World';
// var Xtitle=document.getElementsByClassName('title');
// console.log(Xtitle);
// console.log(Xtitle[0].textContent);
// var addItems = Xtitle[0];
// addItems.innerHTML = '<b>Add Items</b>'
// addItems.style.color = 'red';
var Xtitle=document.getElementsByClassName('list-group-item');
console.log(Xtitle)
Xtitle[2].style.backgroundColor='green';
for (let i=0;i<Xtitle.length;i++){
    Xtitle[i].style.fontWeight='bold';
}
var Ytitle=document.getElementsByTagName('li');
for(let i=0; i<Ytitle.length;i++){
    Ytitle[i].style.backgroundColor='red';
}
