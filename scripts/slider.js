let arrow_right = document.querySelector("#arrow_right");
let arrow_left = document.querySelector("#arrow_left");
let slider_image = document.querySelector(".t-slider-image");
let slider_title = document.querySelector("t-slider-title");



var variables = [
    {
        title:"Python",
        image:"images/python.png"
    },
    {
        title:"Django",
        image:"images/django.png"
    },
    {
        title:"Flask",
        image:"images/flask.png"
    },
    {
        title:"Html5",
        image:"images/html5.png"
    },
    {
        title:"Css3",
        image:"images/css3.png"
    },
    {
        title:"Javascript",
        image:"images/javascript.png"
    },
    {
        title:"Node Js",
        image:"images/node-js.png"
    },
    {
        title:"Vue JS",
        image:"images/vuejs.png"
    },
]

var index = 4;

function ChangeSlider(index){
    document.querySelector(".t-slider-image").setAttribute("src" ,variables[index].image);
    document.querySelector(".t-slider-title").innerHTML = variables[index].title
}
document.querySelector("#arrow_left").addEventListener("click" , function(){
    if(index < 0){
        index =(variables.length)-1 ;
    }else{
        index -=1;
        
    }
    ChangeSlider(index);
});

document.querySelector("#arrow_right").addEventListener("click" , function(){
    if(index >(variables.length)-2 ){
        index = 0;
    }else{
        index+=1;
        
    }
    ChangeSlider(index);
});


