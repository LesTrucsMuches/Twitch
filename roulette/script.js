//variables globales
let tickSound;
let voice;
let voiceCheckbox;
let userList = [];
let openRoulette = false;
let fontName = "Roboto";
let fontColor;
let rouletteTimer;
let rainbowCheckbox;
let itemColorPicker;
let itemBorderWidth;
let itemBorderColorPicker;
let jebaitedToken;

let options = [];
let startAngle = 0;
let arc = Math.PI / (options.length / 2.0);
let spinTimeout = null;
let spinArcStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;
let lastIndex = 0;
let ctx;

// https://jebaited.net/
// api externe pour envoyer des messages via streamelement.
// - Go to jebaited.net website
// - Authorize the application to connect to your Streamelements
// - Go to API tokens
// - Where it says "Scopes", click on it and select botMsg 
//   an click on "Add Token"
// - Your token will appear right below
// - Copy your token in the variable jebaitedToken below.
// - use the function sendMessage("your message") to send bot message.

function sendMessage(message){
  if (jebaitedToken !== ""){
    const encodedMessage = encodeURIComponent(message);
    console.log(jebaitedToken);
  	fetch("https://api.jebaited.net/botMsg/" + jebaitedToken + "/" + encodedMessage);
  }
}

// [Filiz, Astrid, Tatyana, Maxim, Carmen, Ines, Cristiano, Vitoria, Ricardo, Maja, Jan, Jacek, Ewa, Ruben, Lotte, Liv, Seoyeon, Takumi, Mizuki, Giorgio, Carla, Bianca, Karl, Dora, Mathieu, Celine, Chantal, Penelope, Miguel, Mia, Enrique, Conchita, Geraint, Salli, Matthew, Kimberly, Kendra, Justin, Joey, Joanna, Ivy, Raveena, Aditi, Emma, Brian, Amy, Russell, Nicole, Vicki, Marlene, Hans, Naja, Mads, Gwyneth, Zhiyu, es-ES-Standard-A, it-IT-Standard-A, it-IT-Wavenet-A, ja-JP-Standard-A, ja-JP-Wavenet-A, ko-KR-Standard-A, ko-KR-Wavenet-A, pt-BR-Standard-A, tr-TR-Standard-A, sv-SE-Standard-A, nl-NL-Standard-A, nl-NL-Wavenet-A, en-US-Wavenet-A, en-US-Wavenet-B, en-US-Wavenet-C, en-US-Wavenet-D, en-US-Wavenet-E, en-US-Wavenet-F, en-GB-Standard-A, en-GB-Standard-B, en-GB-Standard-C, en-GB-Standard-D, en-GB-Wavenet-A, en-GB-Wavenet-B, en-GB-Wavenet-C, en-GB-Wavenet-D, en-US-Standard-B, en-US-Standard-C, en-US-Standard-D, en-US-Standard-E, de-DE-Standard-A, de-DE-Standard-B, de-DE-Wavenet-A, de-DE-Wavenet-B, de-DE-Wavenet-C, de-DE-Wavenet-D, en-AU-Standard-A, en-AU-Standard-B, en-AU-Wavenet-A, en-AU-Wavenet-B, en-AU-Wavenet-C, en-AU-Wavenet-D, en-AU-Standard-C, en-AU-Standard-D, fr-CA-Standard-A, fr-CA-Standard-B, fr-CA-Standard-C, fr-CA-Standard-D, fr-FR-Standard-C, fr-FR-Standard-D, fr-FR-Wavenet-A, fr-FR-Wavenet-B, fr-FR-Wavenet-C, fr-FR-Wavenet-D, da-DK-Wavenet-A, pl-PL-Wavenet-A, pl-PL-Wavenet-B, pl-PL-Wavenet-C, pl-PL-Wavenet-D, pt-PT-Wavenet-A, pt-PT-Wavenet-B, pt-PT-Wavenet-C, pt-PT-Wavenet-D, ru-RU-Wavenet-A, ru-RU-Wavenet-B, ru-RU-Wavenet-C, ru-RU-Wavenet-D, sk-SK-Wavenet-A, tr-TR-Wavenet-A, tr-TR-Wavenet-B, tr-TR-Wavenet-C, tr-TR-Wavenet-D, tr-TR-Wavenet-E, uk-UA-Wavenet-A, ar-XA-Wavenet-A, ar-XA-Wavenet-B, ar-XA-Wavenet-C, cs-CZ-Wavenet-A, nl-NL-Wavenet-B, nl-NL-Wavenet-C, nl-NL-Wavenet-D, nl-NL-Wavenet-E, en-IN-Wavenet-A, en-IN-Wavenet-B, en-IN-Wavenet-C, fil-PH-Wavenet-A, fi-FI-Wavenet-A, el-GR-Wavenet-A, hi-IN-Wavenet-A, hi-IN-Wavenet-B, hi-IN-Wavenet-C, hu-HU-Wavenet-A, id-ID-Wavenet-A, id-ID-Wavenet-B, id-ID-Wavenet-C, it-IT-Wavenet-B, it-IT-Wavenet-C, it-IT-Wavenet-D, ja-JP-Wavenet-B, ja-JP-Wavenet-C, ja-JP-Wavenet-D, cmn-CN-Wavenet-A, cmn-CN-Wavenet-B, cmn-CN-Wavenet-C, cmn-CN-Wavenet-D, nb-no-Wavenet-E, nb-no-Wavenet-A, nb-no-Wavenet-B, nb-no-Wavenet-C, nb-no-Wavenet-D, vi-VN-Wavenet-A, vi-VN-Wavenet-B, vi-VN-Wavenet-C, vi-VN-Wavenet-D, sr-rs-Standard-A, lv-lv-Standard-A, is-is-Standard-A, bg-bg-Standard-A, af-ZA-Standard-A, Tracy, Danny, Huihui, Yaoyao, Kangkang, HanHan, Zhiwei, Asaf, An, Stefanos, Filip, Ivan, Heidi, Herena, Kalpana, Hemant, Matej, Andika, Rizwan, Lado, Valluvar, Linda, Heather, Sean, Michael, Karsten, Guillaume, Pattara, Jakub, Szabolcs, Hoda, Naayf]]

function tts(message){
    let myAudio = new Audio('//api.streamelements.com/kappa/v2/speech?voice=' + voice + '&text=' + encodeURI(message));
      myAudio.addEventListener('ended', function () {
        $(".main-container").fadeOut();
    }, false);
    myAudio.play();
}

// load fieldData

window.addEventListener('onWidgetLoad', function (obj) {
    const {fieldData} = obj.detail;
  
  	if (fieldData["tickSound"]){
      tickSound = new Audio(fieldData["tickSound"]);
    } else {
      tickSound = new Audio("https://cdn.streamelements.com/uploads/fab33884-3993-4bf5-9eeb-4c0f8da71cd4.mp3");
    }

    voice = fieldData["voice"];
    voiceCheckbox = fieldData["voiceCheckbox"];
    fontName = fieldData["fontName"];
    fontColor = fieldData["fontColor"];
    rouletteTimer = fieldData["rouletteTimer"];
    rainbowCheckbox = fieldData["rainbowCheckbox"];
    itemColorPicker = fieldData["itemColorPicker"];
    itemBorderWidth = fieldData["itemBorderWidth"];
    itemBorderColorPicker = fieldData["itemBorderColorPicker"];
    jebaitedToken = fieldData["jebaitedToken"];
    $(".main-container").fadeOut();
});


window.addEventListener('onEventReceived', function (obj) {
    const listener = obj.detail.listener;
    const data = obj.detail.event.data;
  
  	// si l'évènement est un message
  	if (listener === 'message') {
      const args = data.text.split(' ');
      // retire le premier élément du array et l'enregistre dans 
      // la variable "command" et met la commande en minuscule
      const command = args.shift().toLowerCase();

      const permissions = [
        {
            type: "role",
            value: "broadcaster"
        },
        {
            type: "role",
            value: "moderator"
        }
      ]

      // si la roulette est ouvert à ajouter des noms
      if (command === '!join' && openRoulette == true){
        //si le user n'existe pas dans la liste
        if (userList.indexOf(data.nick) === -1) {
          userList.push(data.nick);
          sendMessage("@" + data.nick + ", tu as été ajouté à la Roulette.")
        }
      }


      if (grantaccess(data,permissions) == true) {

            if (command === '!roulette' && openRoulette == false){
                // si aucun argument n'est fourni
                // laisser 60sec pour les viewers de s'ajouter à la liste
                // en écrivant !join dans le tchat
              	let timer = rouletteTimer;
              	if (args.length <= 1){
                  if (args.length == 1){
                    if (!isNaN(args[0])) {
                      timer = parseInt(args[0]);
                    }
                  }

                  sendMessage("Vous avez " + timer.toString() + " secondes pour écrire !join dans le tchat.");
                  userList = [];
                  openRoulette = true;
                  setTimeout(function() {
                    openRoulette = false;
                    if (userList.length > 1){
                    	startRoulette(userList);
                    } else {
                        sendMessage("Il n'y a pas assez de gens dans la roulette.");
                    }
                  }, timer * 1000);
                // sinon s'il y a des arguments, démarre la roulette
                } else {
                      startRoulette(args);
                }

           }//end if (command === '!roulette')
    
    	}//if (grantaccess(data,permissions) == true)
     }//end if (listener === 'message')
});

function startRoulette(args){
  options = args;
  arc = Math.PI / (args.length / 2.0);
  drawRouletteWheel();
  $(".main-container").fadeIn();
  spin();
}


function grantaccess(messageinfo,permissions) {
  let grant = false;
  let badges = messageinfo.tags.badges;
  let sub = messageinfo.tags.subscriber;
  let mod = messageinfo.tags.mod;
  let username = messageinfo.nick;
  let message = messageinfo.text;
  
  for (let permission of permissions){
   
    if (permission.type == "role")
    {
      switch(permission.value) {
        case "broadcaster":
          if (badges.indexOf("broadcaster") >= 0) {
            grant = true;
          }
          break;
        
        case "moderator":
           if (mod == "1") {
            grant = true;
          }
          break;
        
        case "viewer":
           grant = true;
           break;
        
        case "subscriber":
           if (sub != "0") {
            grant = true;
          }
          break;
      }
      
    }
    
     if (permission.type == "user")
    {
      if (permission.value == username)
      {
        grant = true;
      }
    }
    
  }
  
 return grant;
    
}



// byte to hexadecimal, use for convert rgb to hexadecimal html color
function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

// convert rgb to hexadecimal html color
function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function drawRoundedRect(ctx, x, y, w, h, radius) {
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = "2";
  ctx.moveTo(x + radius, y);
  ctx.lineTo(r - radius, y);
  ctx.quadraticCurveTo(r, y, r, y + radius);
  ctx.lineTo(r, b - radius);
  ctx.quadraticCurveTo(r, b, r - radius, b);
  ctx.lineTo(x + radius, b);
  ctx.quadraticCurveTo(x, b, x, b - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.fill();
  ctx.stroke();
}

// function to rotate all colors from 0 to 360 degrees
function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,600,1000);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.font = 'bold 12px ' + fontName + ', Arial';
    newlist = [];
    let itemcolor;
    // first loop to get date of all options
    for(var i = 0; i < options.length; i++) {
      if (rainbowCheckbox == true){
        itemcolor = getColor(i, options.length);
      } else {
        itemcolor = itemColorPicker;
      }
      var angle = startAngle + i * arc;
      newlist.push({
        angle: angle,
        text: options[i],
        fontsize: (Math.cos(angle) + 2) * 10,
        fillStyle: itemcolor,
        x: 55,
        y:(225 * Math.sin(angle)) +261
      })
    }

    // sort the first loop to draw back element first
    var compareObjects = function(a,b){
      if(Math.cos(a.angle) < Math.cos(b.angle)){
        return -1;
      }
      if(Math.cos(a.angle) > Math.cos(b.angle)){
        return 1;
      }
    }
    newlist = newlist.sort(compareObjects);

    // loop to draw all elements
    for(var i = 0; i < newlist.length; i++) {
      ctx.beginPath();
      // draw and fill rectangle
      ctx.fillStyle = newlist[i].fillStyle;
      var a = newlist[i].fontsize;
      var x = newlist[i].x + ((400 -(a * 15))/2);
      var y = newlist[i].y - a;
      var w = a * 15;
      var h = a * (42 / newlist.length);
      ctx.rect(x,y, w, h);
      ctx.fill();
      ctx.lineWidth = itemBorderWidth;
      ctx.strokeStyle = itemBorderColorPicker;
      ctx.stroke();
      // draw text
      ctx.save();
      ctx.fillStyle = fontColor;
      ctx.font = 'bold ' + newlist[i].fontsize + 'px ' + fontName + ', Arial';
      ctx.fillText(newlist[i].text, 250 -ctx.measureText(newlist[i].text).width / 2, newlist[i].y + (h / 2) - (newlist[i].fontsize /2));
      ctx.restore();
    }
    ctx.save();
    ctx.fillStyle = "black";
    // draw triangle
    ctx.beginPath();
    ctx.moveTo(500, 225);
    ctx.lineTo(525, 240);
    ctx.lineTo(525, 210);
    ctx.lineTo(500, 225);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
     
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 1000 + 14000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  //test sound
  var degrees = startAngle * 180 / Math.PI;
  var arcd = arc * 180.0 / Math.PI;
  var index = Math.floor((360.0 - degrees % 360.0) / arcd);
  if (index != lastIndex){
    tickSound.cloneNode(true).play();
    lastIndex = index;
  }
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  
  // find the winner option
  var degrees = startAngle * 180 / Math.PI;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.font = 'bold 30px ' + fontName + ', Arial';
  var text = options[index];

  // draw the winner option
  ctx.beginPath();
    //ctx.fillStyle = "white";
    //ctx.rect(10,205,440,50);
    drawRoundedRect(ctx, 10,195,510, 80, 20);

    //ctx.fill();
    //ctx.stroke();
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillText("Le gagnant est", 250 - ctx.measureText("Le gagnant est").width / 2, 230);
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 265);
  ctx.restore();
  
  if (voiceCheckbox == true){
  	tts("le gagnant est " + text);
  }
  sendMessage("le gagnant est " + text);
 
}

// function to slow the wheel
function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}