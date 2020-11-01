//To scan a barcode and check if its in the db
var firebaseConfig = {
  apiKey: 'AIzaSyBe6NpoaABtjtQUmnSaZI3pa1kYS4klb0w',
  authDomain: 'knockknock-7cc13.firebaseapp.com',
  databaseURL: 'https://knockknock-7cc13.firebaseio.com',
  storageBucket: 'knockknock-7cc13.appspot.com',
  projectId: 'knockknock-7cc13'
};
firebase.initializeApp(firebaseConfig);

ScanditSDK.configure("AQUfWhu8BLC9G/00iCazq40O7bPKPtpGL3r6pw9EtuZ8Co9Kh2uUhZNs4mhMXFBEvzSNaj9iUTShYnLi6QkPQVkQ6PcYb+4DYC9oQqJ+1p0hb0XEuWxERzAhKU4tfawGfho+NyUNhUQsD73W0RKR6nueCrfc6Fxtxy/p8Z0pACxqTEdWiu5kREbgKK4dbAc5vNJLVh70ti++WQSvuGr6AZ/MvOdi+IPHjMXZBCPFj81zenj4URbmjnpcnLiPOlEj687qk1qeZzH0IfFomW6q2npUyjSFczFhJHm/p1mNpeN0RklBhqK9IKo3Xe3dPug0xXxZrwq24S7NpVgjiIFrBCmEMoJFOAFo2wlPXfKqPaym+2j87In0GPfQ5Nc+liS/2Rlt8EpCmB1OAl1WuQFBTsv462cbEhRcx4YskaPbBLmpysSOINCopfOuCCMUOOnRtONN5MXHFY361q4WIqgas8KvWKCHMY/9WqH4QTvdkSrN6UIQLv6BabcsUlqQHAhQiarcaOIRso+UMO8F1Baz3FdrSwGLkbg7JXoAseicSBw0JsrI4Q64O7ne4SAL5oyYXvO4EsRK6f+oxbAqFzfHZR9kACddRfjchLSeuny9jyFkqyi/gq9Lm4v3rN243wWmw/V1KOkUPBuTB43jDtiYSEnU2Z96UFgF30s7QOBgco4VnHX6HwRZ15kN9lbfdtY7VNGRqabULuecYGEaXMpfVpYlH6izhg2p7BfcaaAWEWGJtPuvXY2KUMmejLmfrLl4EFD3rx3HB3IKhh9hNl7pYYhfw92yowlA6X8nww/hO4GIuTQFgwy2j5yhFTmXsYY=", {
  engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
})
  .then(() => {
    return ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
      // enable some common symbologies
      scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),

    });
  })
  .then((barcodePicker) => {
    // barcodePicker is ready here, show a message every time a barcode is scanned
    barcodePicker.on("scan", (scanResult) => {

      console.log(scanResult.barcodes[0].data);
      var timeout = setInterval(doNothing, 1000);
      function doNothing(){

        console.log("Timed out");

          //Check if the scanResult is in the db as a registered barcode
          //If it checks out, add to the db and uncomment the next lines of code:

          var query = firebase.Firestore().collection('messages');
          query.onSnapshot(function(snapshot){
            snapshot.docChanges().forEach(function(change){
              var message = change.doc.data();
              if(scanResult.barcodes[0].data == message.code){
                var sweets = document.cookie || "0";
                var sweetsInt = parseInt(sweets, 10);
                sweetsInt++
                document.cookie = "sweets=" + sweetsInt.toString();
              }
            });
          });




      }


    });
  });
