menuTarget = document.querySelector('.menu');
burgerTarget = document.querySelector('.burger');
burgerTarget.style.display = 'inline';
crossTarget = document.querySelector('.cross');
crossTarget.style.display = 'none';
sidebarTarget = document.querySelector('.sidebar');

menuTarget.addEventListener('click', ()=>{
    sidebarTarget.classList.toggle('sidebarGo');
    if(sidebarTarget.classList.contains('sidebarGo')){
        burgerTarget.style.display = 'inline';
        crossTarget.style.display = 'none';
    }else{
        burgerTarget.style.display = 'none';
        setTimeout(()=>{
            crossTarget.style.display = 'inline';
        },300);
    }
    
})