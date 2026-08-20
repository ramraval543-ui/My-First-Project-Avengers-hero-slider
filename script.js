
  let images=["captain-america-shield-art-o6.jpg","ironman.jpg","thor.jpg","OIP.webp","spider.jpg"]; 
  let heroname=["captain america","ironman","thor","hulk","spiderman"];
  let herodetails=["steve roges is super soldier and leaders of avengers.","tony stark is genius inventor with powerfull iron suit","thor is god of thunder and is weapan is hammer","bruce banner is transfrom to powerfull hulk","spide-rman is young superhero in all avengers"];


  let i=0;
  function next(){
   i++;
   if(i >= images.length){
    i=0;
   
   }
   document.body.style.backgroundImage=`url(${images[i]})`;
   document.getElementById("heroname").innerText=heroname[i];
   document.getElementById("herodetails").innerText=herodetails[i];
  }


  function privsise(){
    i--;
    if(i < 0){
      i = images.length -1;

    }
     document.body.style.backgroundImage=`url(${images[i]})`;
       document.getElementById("heroname").innerText=heroname[i];
   document.getElementById("herodetails").innerText=herodetails[i];
  }