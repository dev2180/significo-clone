function homepageAnimation(){
    gsap.set("#ball",{scale:5})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        
        start: "top top",
        bottom: "bottom bottom",
        scrub: 1
    }
})
tl.to(".vdodiv",{
    '--clip': "0%",
    ease: Power2
},'a').to("#ball",{
    scale: 1,
    ease: Power2
},'a')
.to(".lft",{
    xPercent: -10,
    stagger: 0.04,
    ease: Power4
},'b')
.to(".rgt",{
    xPercent: 10,
    stagger: 0.04,
    ease: Power4
},'b')
}

function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: '.real',
            start: 'top top',
            end: 'bottom top',
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}
function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(el=>{

        el.addEventListener("mousemove",function(dets){
            
            gsap.to(this.querySelector(".picture"),{opacity:1,x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX), ease: Power4, duration: 0.2})
        })
        el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"),{opacity:0, ease: Power4, duration: 0.2})
        })
    })
}
function paraAnimation(){
    var clutter='';
document.querySelector(".textPara").textContent.split("").forEach(e=>{
    if(e===' ') clutter+= `<span>&nbsp;</span>`
    clutter+=`<span>${e}</span>`
})
document.querySelector(".textPara").innerHTML=clutter;
gsap.set(".textPara span",{opacity:.1})
gsap.to(".textPara span",{scrollTrigger:{trigger: ".para", start: "top 50%", end: "bottom 50%", scrub: 1},opacity:1 ,stagger: .09, ease: Power4})

}
function makePageSmooth(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsuleAnimation(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        }
    
    })
    tl.to(".capsule:nth-child(1)",{
        y:0,x:0,
        ease: Power4
    },'a')
    tl.to(".capsule:nth-child(2)",{
        y:0,x:0,
        ease: Power4
    },'a')
}
function bodyAnimation(){
    document.querySelectorAll(".section").forEach(e=>{
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack: function(){document.body.setAttribute("theme",e.dataset.color);}
        })
    })
}
homepageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
makePageSmooth();
capsuleAnimation();
bodyAnimation();