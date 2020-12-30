var models =[
    {
        name:"Bmw 418d",
        image:"img/bmw.jpg",
        link:"http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        name:"Mazda CX-3",
        image:"img/mazda.jpg",
        link:"http://www.arabalar.com.tr/mazda/cx-3/2017/1-5sky-d-motion"
    },
    {
        name:"Volvo S60",
        image:"img/volvo.jpg",
        link:"http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance"
    },
    {
        name:"Skoda Superb",
        image:"img/skoda.jpg",
        link:"http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        name:"Honda Civic",
        image:"img/honda.jpg",
        link:"http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance"
    }
];
var index =0;
var interval;
var settings={
    duration:"2000", // set this for slider velocity
    random : true 
};


init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    showSlide(index);
});
document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
    showSlide(index);
});

document.querySelectorAll(".js-arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });
    item.addEventListener("mouseleave",function(){
        init(settings);
    });
});

document.querySelector(".card-img-top").addEventListener("mouseenter",function(){
    clearInterval(interval);
});
document.querySelector(".card-img-top").addEventListener("mouseleave",function(){
    init(settings);
});


function init(settings){

    var prev;

    //  setTimeout //bir kere çalışır gecikme verilir içerisine gecikme kadar bekleyip çalışır
    //setInterval clearInterval ile durdurulmadığı sürece tekrar eder. ms cinsinden
    interval = setInterval(function(){
        if(settings.random)
        {
            //generate random index
            do{
                index=Math.floor(Math.random()*models.length);
            }while(index==prev)
            prev=index;
        }
        else{
            //generate increasing index
            if(models.length == index){
                index=0;
            }
            index++;
        }
        showSlide(index);
    },settings.duration);
}


function showSlide(i){

    index = i;
    if(i<0){
        index = models.length-1;
    }
    if(i>models.length-1){
        index=0;
    }
    document.querySelector(".card-title").textContent=models[index].name;
    document.querySelector('.card-img-top').setAttribute("src",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link);
}






