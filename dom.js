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

// var Ztitle=document.querySelector('li:nth-child(2)');
// Ztitle.style.backgroundColor='green';
// var Ytitle=document.querySelector('li:nth-child(3)');
// Ytitle.style.display='None';

// var Atitle=document.querySelectorAll('li');
// Atitle[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for (let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
var newDiv=document.createElement('div');
newDiv.id="hello1";
newDiv.setAttribute('title', 'Hello Div');

var newDivText=document.createTextNode("Hello World");
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(newDiv);


var newDiv1=document.createElement('div');
newDiv1.id="list1";
newDiv1.setAttribute('title', 'List Div');

var newDivText1=document.createTextNode("Hello World");
newDiv1.appendChild(newDivText1);
var container1=document.querySelector('#main ul');
console.log(container1)
var itemList=document.querySelector('#items');
var childList=itemList.children[0];
// var h1=document.querySelector('header h1');
container1.insertBefore(newDiv1,childList);
// console.log(newDiv1);
