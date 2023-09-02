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
// 

var Ztitle=document.querySelector('li:nth-child(2)');
Ztitle.style.backgroundColor='green';
var Ytitle=document.querySelector('li:nth-child(3)');
Ytitle.style.display='None';

var Atitle=document.querySelectorAll('li');
Atitle[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
