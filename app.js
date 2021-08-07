const navslide= () =>{
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    })
}
navslide();