function burgerClick(x) {
    x.classList.toggle('change')
    document.querySelector('.header__navMobile').classList.toggle('header__navMobileActive')
}
function fadeSectionTop(){
    document.querySelector('.section__topChildCenter').classList.add('fadeSectionTop')
}
function hideLoader(){
    document.querySelector('.loader__main').classList.add('loader__hide')
}
function enableScroll() {
    document.querySelector('body').style.overflow = 'initial'
}

window.addEventListener('load',()=>{

    let x = false;
    window.addEventListener('scroll',e => {
        const cardsMainOffset = document.querySelector('.feature__cardMain').offsetHeight;
        let scrollVal = window.pageYOffset;
        if(scrollVal - cardsMainOffset > 150 && !x){
            const cards = document.querySelectorAll('.feature__card');
            for(let i = 0; i < cards.length ; i++){
                setTimeout(function(){
                    cards[i].classList.add('fadeFeatures')
                },500*i)
            }
            x = true;
        }
    })

    setTimeout(function(){
        fadeSectionTop()
    },500)


    setTimeout(function(){
        hideLoader()
        enableScroll()
    },300)


})