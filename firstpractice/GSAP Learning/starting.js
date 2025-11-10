gsap.to('.box',{   // Here gsap.to() takes two parameters : the property as we write in css and second is object. To is always start with 0th position.
    x : 1200,  // it will move your box at 1200 from x axes.
    duration : 2,
    rotate : 360 ,
    delay:1,  // box1 also play with same time so in case we required to do first box then 2nd, instead of delay the timeline() function can be more powerdfull as it works after completion of first task.
    repeat : 2,
    yoyo : true,
    backgroundColor : "rgb(180, 0, 0)",
    borderRadius : "50%"
}) 
gsap.from('.box2',{  // It will start from the 800(x) and 600(y)
    x : 1200,
    y: 80,
    rotate : 360,
    duration : 10,
    delay : 1,  // box also play with same time so in case we required to do first box then 2nd, instead of delay the timeline() function can be more powerdfull as it works after completion of first task.
    repeat : -1,  // To perfrom something infinite time, -1 is used.
    yoyo : true,
    backgroundColor : "green" ,
    borderRadius : "100%"
})

gsap.to('h1',{
    // x:200,
    y:30,
    opacity : 1,
    duration:1, // boxes are also play with same time so in case we required to do first box then 2nd, instead of delay the timeline() function can be more powerdfull as it works after completion of first task.
    delay:1, 
    backgroundColor : "transparent",
    color : "orange",
    stagger : 0.3 // first it display one h1 then second and then third.
})

// let tl = gsap.timeline();

// tl.to('.names',{
//     y:-30,
//     opacity : 1,
//     duration : 1,
//     delay:1,
//     color :"orange"
// })


let tl = gsap.timeline();

tl.from('.title h2',{
    y : -20 ,
    opacity : 0,
    delay : 0.3,
    duration:0.5,
    
})

tl.from('.parts h3',{
    y : -20,
    opacity : 0,
    delay : 0.3,
    duration : 0.5,
    stagger : 0.3,
    scale : 2
})