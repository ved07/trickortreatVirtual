//to create a barcode and put the code in the db
var image = document.getElementById("barcode");
var click = document.getElementById("click");

var firebaseConfig = {
  apiKey: 'AIzaSyBe6NpoaABtjtQUmnSaZI3pa1kYS4klb0w',
  authDomain: 'knockknock-7cc13.firebaseapp.com',
  databaseURL: 'https://knockknock-7cc13.firebaseio.com',
  storageBucket: 'knockknock-7cc13.appspot.com',
  projectId: 'knockknock-7cc13'
};
firebase.initializeApp(firebaseConfig);

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
  saveClick(generated);

}

function saveClick(clickText){

  return firebase.firestore().collection('messages').add({
    code: clickText
  }).catch(function(error){
    console.error('Error writing a code to cloud', error);
  });

}
