
window.onload = function(){
    
    let tablinks = document.querySelectorAll('.tab-link');
    
    for(var i=0; i<tablinks.length; i++){
        tablinks[i].addEventListener('click',openCity);
    }
   console.log('hdjdjdjd')
   tablinks[0].click();
}


function openCity(){
    
    let id = this.getAttribute('content');
    let tab_contents = document.querySelectorAll('.tab-content');
    
    for (var i = 0; i < tab_contents.length; i++) {
        
        tab_contents[i].classList.remove('active');
        
    }
    
    document.querySelector('#'+id).classList.add('active')
}