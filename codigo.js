let element = parseInt(prompt("stock controler\n1-hoodie\n2-t-shirt\n3-pants\n4-parachute"));

function controler(section){
    let wear=[];
    if(section==1){
    wear = stock.filter(stock=> stock.exemplaries==3);
}else if(section==2){
    wear = stock.filter(stock=>stock.exemplaries==10);
}else if(section==3){
    wear = stock.filter(stock=>stock.exemplaries==4);
}else if(section==4){
    wear = stock.filter(stock=>stock.exemplaries==7);
}else{
    console.log("no existe ese numero");
}
console.log(wear);
}

controler(element);





//metodo de busqueda



const search = stock.some(stock=>stock.name="hoodie,t-shirt, pant, parachute" );

      console.log(search);

if(search == true){

      console.log("section found");

}else if(search == false){
    
    cosnsole.log("Not found")

}


//function

function h(){
    console.log("aviable clothes: "+stock.length);
}

h();