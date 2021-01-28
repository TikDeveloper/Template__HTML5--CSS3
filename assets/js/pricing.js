function hideLoader(){
    document.querySelector('.loader__main').classList.add('loader__hide')
}
function enableScroll() {
    document.querySelector('body').style.overflow = 'initial'
}
window.addEventListener('load',()=>{



    setTimeout(function(){
        hideLoader()
        enableScroll()
    },300)


})