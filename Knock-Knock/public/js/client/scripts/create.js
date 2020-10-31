//to create a barcode and put the code in the db
var image = document.getElementById("barcode");
var click = document.getElementById("click");

function generateNumber(){
  var genNumb;
  var today = new Date();
  genNumb = today.getHours() + today.getMinutes() + today.getSeconds() + Math.floor(Math.random() * 10);


  return genNumb;
}

function getClick(){
  var generated = generateNumber();

  image.src = "http://barcodes4.me/barcode/c128a/" + generated + ".jpg";
  //send the number to the db
  
}
