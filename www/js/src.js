console.log(document, ' file')
var menu_opener = document.getElementById('menu-opener');
console.log(menu_opener)
var menu = document.getElementById('menu');
console.log(menu)
menu_opener.addEventListener('click', function(){
  console.log('click work')
  console.log(menu_opener.classList.contains('active'))
  if(menu_opener.classList.contains('active')){
    console.log('triggered true')
    menu_opener.classList.remove("active");
    menu.classList.remove("active");
  }else{
    console.log('triggered false')
    menu_opener.classList.add("active");
    menu.classList.add("active");
  }
})
