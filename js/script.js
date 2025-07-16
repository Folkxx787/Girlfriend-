const bt = document.getElementById('bt') ;
const gf = document.getElementById('gf') ;
bt.addEventListener('click',function(){
    gf.classList.remove('hidden') ;
    bt.style.display = 'none' ;
}) ;
