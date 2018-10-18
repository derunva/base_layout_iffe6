console.log(document, ' file')
var menu_opener = document.getElementById('menu-opener');
var menu = document.getElementById('menu');
menu_opener.addEventListener('click', function(){
  
  if(menu_opener.classList.contains('active')){
    menu_opener.classList.remove("active");
    menu.classList.remove("active");
  }else{
    menu_opener.classList.add("active");
    menu.classList.add("active");
  }
})
console.log(menu_opener)