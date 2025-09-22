const tl = gsap.timeline() ; 

tl.to(".card" , {
    opacity : 1 ,
    scale : 1 , 
    duration : 1, 
    ease : "power2.out"
})

tl.to(".card" , {
    y : -20 ,
    repeat : -1 , 
    yoyo : true ,
    duration : 0.5,
    ease : "power1.inOut"
} , "<")

tl.fromTo(".card" , 
    {boxShadow : "0 0 10px #27F5E4"} ,
    {
        boxShadow : "0 0 40px #63F8EB" ,
        scale : 1.05 ,
        repeat : -1 , 
        yoyo : true ,
        duration : 2 ,
        ease : "sine.inOut"
    }
 , "<")