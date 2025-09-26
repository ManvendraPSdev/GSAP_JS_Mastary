import gsap from 'gsap' ; 

const toastPOPup = ()=>{
    gsap.to(".toast" , {
        y : -100 , 
        opacity : 1 ,
        scale : 1 , 
        duration : 0.8 , 
        ease : "expo.out" ,
        onComplete : ()=>{
            gsap.to(".toast" , {
                delay : 2.5 ,
                y : 0 ,
                opacity : 0 , 
                ease : "power4.in",
                onComplete : ()=>{
                    setTimeout(toastPOPup , 2500)
                }
            })
        },
    })
};

toastPOPup() ;