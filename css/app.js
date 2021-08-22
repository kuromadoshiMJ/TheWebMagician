const navslide= () =>{
    const burger= document.querySelector('.burger');
    const body = document.querySelector('.navlink');
    burger.addEventListener('click',()=>{
        body.classList.toggle('nav-active');
    })
}
navslide();