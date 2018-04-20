const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from DAMP, UTAD's modulo!");
 });

//cuidado que te pueden hacer pagar por usos al llegar a 100 pedidas instantaneas
 exports.emojify = functions.database.ref("/messages/{pushId}/text").onCreate(myHandler =>{
   console.log("Emojify..");
   var originalData = myHandler.val();
   var emojiFieldData = emojiText(originalData);

   return myHandler.ref.set(emojiFieldData); //devuelve null o concreto, o promesa
 })

 function emojiText (text){
   var emojifiedText = text;
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    emojifiedText = emojifiedText.replace(/\b987654321\b/ig, "numero oculto");
    return emojifiedText;
 }

 /*exports.clasificar = functions.database.ref("/messages/{pushId}/number").onCreate(myHandler =>{
   console.log("ocultando tlf..");
   var originalData = myHandler.val();
   var tlfFieldData = tlfText(originalData);

   return myHandler.ref.set(tlfFieldData); //devuelve null o concreto, o promesa
 })

 function tlfText(text){
   var tlfFiedText = text;
    //tlfFiedText = tlfFiedText.replace(/\b\d\d\d\d\d\d\d\d\d\b/ig, "#########");
    tlfFiedText = tlfFiedText.replace(/\b987654321\b/ig, "numero oculto");
    return tlfFiedText;
 }*/
