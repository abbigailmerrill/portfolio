var navButton = $(".menu");
var navBar1 = navButton.find("div:nth-child(1)");
var navBar2 = navButton.find("div:nth-child(2)");
var navBar3 = navButton.find("div:nth-child(3)");
var slideout = $('.menuSlideout');
var link1 = $('.menuSlideout a:nth-child(1)');
var link2 = $('.menuSlideout a:nth-child(2)');
var link3 = $('.menuSlideout a:nth-child(3)');
var link4 = $('.menuSlideout a:nth-child(4)');

navButton.click(function() {
if(!navButton.hasClass('postAnimation')){    
    navBar1.addClass("active");
    navBar2.addClass("active");
    navBar3.addClass("active");
    navButton.addClass("postAnimation");
    slideout.addClass("active");
    console.log("Classes added");
}else if(navButton.hasClass('postAnimation')){
    navBar1.removeClass("active");
    navBar2.removeClass("active");
    navBar3.removeClass("active");
    navButton.removeClass("postAnimation");
    slideout.removeClass("active");
    console.log('Active classes removed.')
    }
});

link1.click(function(){
    slideout.removeClass('active');
    navBar1.removeClass("active");
    navBar2.removeClass("active");
    navBar3.removeClass("active");
    navButton.removeClass("postAnimation");
})

link2.click(function(){
    slideout.removeClass('active');
    navBar1.removeClass("active");
    navBar2.removeClass("active");
    navBar3.removeClass("active");
    navButton.removeClass("postAnimation");
});

link3.click(function(){
    slideout.removeClass('active');
    navBar1.removeClass("active");
    navBar2.removeClass("active");
    navBar3.removeClass("active");
    navButton.removeClass("postAnimation");
});

link4.click(function(){
    slideout.removeClass('active');
    navBar1.removeClass("active");
    navBar2.removeClass("active");
    navBar3.removeClass("active");
    navButton.removeClass("postAnimation");
});

document.querySelectorAll('.menuSlideout a:not(.githubLink)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.body.querySelector('.widgetBox').addEventListener('click', function(e){
    e.preventDefault();

    document.body.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:  'smooth'
    })
});

document.body.querySelector(".heroBox").addEventListener('click', function(e){
    e.preventDefault();

    document.body.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    })
})

document.querySelectorAll('.links a:not(.githubLink)').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:'smooth'
        })
    })
})