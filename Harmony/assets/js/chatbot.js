//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
var name = '';


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "";//keeps track of the most recent input string from the user
  botMessage = "";//var keeps track of what the chatbot is going to say
  botName = 'Support Bot'; //name of the chatbot
  userName = "Me:";
  talking = true; //when false the speach function doesn't work
  var messageBody = document.querySelector('#scrollbar');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused, type help for support"; //the default message

  if (name === '') {
    name = lastUserMessage;
    botMessage= "Hi, type help for all commands,  "+ name;
    return;
  }

  if (lower === 'hi' || lower =='hello') {
    const hi = ['hi','howdy','hello'];
    botMessage = hi[Math.floor(Math.random()*(hi.length))];
  }
  

  if (lower === 'how are you') {const icicleicicle = ['I am fine', 'I am ok', 'I am well']; botMessage = icicleicicle[Math.floor(Math.random()*(icicleicicle.length))]; }

if (lower === 'i am cool' || lower== 'i am awesome') {
    botMessage = 'Totally! You rule '+name+"!";
  }
if (lower === 'i love you') {
    botMessage = 'Aww... '+name+" you are so sweet!";
  }
 if (lower === 'what is my purpose') {
    botMessage = name+' , you are very special to this world! If you are depressed, type suicide.';
  }
  if (lower === 'tell me a joke') {
    botMessage = 'I am a Human!';
  }


  if (lower === 'help') {
    botMessage = 'All Commands: Go to (insert destination: ex. racism, gender, lgbt), what is climate change, what are greenhouse gasses, what is global warming, i want a quiz, i want to kill myself, why am i gay, why am i bi, why am i trans, why am i stupid, what should i do, how old are you';
  }

  if (lower === 'i am sad'|| lower=='sad') {
    botMessage = name+ ' ,why are you sad? (race, sexuality, gender, disabled, depressed)';
  }

  if (lower === 'mad' || lower=='i am mad') {
    botMessage = name+' ,why are you mad? (race, sexuality, gender, disabled, depressed)';
  }
  if (lower === 'race' || lower=='go to racism') {
    botMessage = 'I see. '+ name+ ' , please go to the <a href="race.html" target="_blank !important;" > Anti-racism page </a> for more help.';
  }
  if (lower === 'lgbt' || lower=='go to lgbt') {
    botMessage = 'I see. '+ name+ ' , please go to the <a href="sexuality.html" target="_blank;"> lgbt page </a> for more help.';
  }
  if (lower === 'gender' || lower=='go to gender') {
    botMessage = 'I see. '+ name+ ' , please go to the <a href="gender.html" target="_blank;"> gender page </a> for more help.';
  }
  if (lower === 'disabled' || lower=='go to disabilities') {
    botMessage = 'I see. '+ name+ ' , please go to the <a href="disabled.html" target="_blank;"> disability page </a> for more help.';
  }
  if (lower === 'suicide' || lower=='depressed') {
    botMessage = name+ ' , I would suggest you immediately go to <a href="https://suicidepreventionlifeline.org" target="_blank"> Suicide Hotline </a> for more help.';
  }
  if (lower === 'i want to kill myself' || lower=='i want to die') {
    botMessage = name+ ' , I would suggest you immediately go to <a href="https://suicidepreventionlifeline.org" target="_blank"> Suicide Hotline </a> for more help.';
  }
  if( lower ==='why am i gay' || lower== 'why am i lesbian'){
    botMessage=name +' , everyone has their own sexuality, you are unique! :) For more help, type in lgbt';
  }
  if( lower ==='why am i bi' || lower== 'why am i bisexual'){
    botMessage=name +' , everyone has their own sexuality, you are unique! :) For more help, type in lgbt';
  }
  if( lower ==='why am i trans' || lower== 'why am i transgender'){
    botMessage=name +' , everyone has their own gender, you are unique! :) For more help, type in lgbt';
  }


  if (lower === 'yes') {const icicleicicle = ['yay?', 'woohoo', 'cool']; botMessage = name + ', ' + icicleicicle[Math.floor(Math.random()*(icicleicicle.length))]; }
  if (lower === 'no') {const supportsupport = ['why not?', 'oh no ', 'i see']; botMessage = name + ', ' + supportsupport[Math.floor(Math.random()*(supportsupport.length))]; }
  if (lower === 'i am stupid') {const faceface = ['sorry to hear that, do you need help', 'sorry to hear that, do you need help or something', 'very sorry to hear that, do you need help']; botMessage = name + ', ' + faceface[Math.floor(Math.random()*(faceface.length))]; }
  if (lower === 'why do you exist') {const sunsun = ['idk, i am made by Jack', 'i dont really know', 'actually I am confused']; botMessage = name + ', ' + sunsun[Math.floor(Math.random()*(sunsun.length))]; }
  if (lower === 'i am depressed' || lower == 'i feel depressed') {
    botMessage= 'Sorry to hear that, do you need help? You can go to <a href="https://suicidepreventionlifeline.org" target="_blank"> Suicide Hotline </a> for more help.';}
  if (lower === 'i am disabled') {const cloverclover = ['hey, you are awesome, you will be great', 'hey, you are awesome, you will be great', 'hey, you are awesome, you will be great']; botMessage = name + ', ' + cloverclover[Math.floor(Math.random()*(cloverclover.length))]; }
  if (lower === 'i am bisexual'|| lower=='i am bi') {
    botMessage=name+' , if you like who you are, you can always be proud of yourself. For more help you can go to the <a href="sexuality.html" target="_blank;"> lgbt page </a> for more help.';}
  if (lower === 'i feel angry') {const treetree = ['how and why are you angry', 'how and why are you angry', 'how and why are you angry']; botMessage = name + ', ' + treetree[Math.floor(Math.random()*(treetree.length))]; }
  if (lower === 'i am happy') {const coilcoil = ['Glad to hear that!', 'Glad to hear that!', 'Glad to hear that!']; botMessage = name + ', ' + coilcoil[Math.floor(Math.random()*(coilcoil.length))]; }
  if (lower === 'i feel meh') {const powderpowder = ['one day, that is changing to a happy', 'one day, that is changing to a happy', 'one day, that is changing to a happy']; botMessage = name + ', ' + powderpowder[Math.floor(Math.random()*(powderpowder.length))]; }
  if (lower === 'i like you') {const trailtrail = ['oh, thank you, you are awesome person', 'oh, thank you, you are awesome person', 'oh, thank you, you are awesome person']; botMessage = name + ', ' + trailtrail[Math.floor(Math.random()*(trailtrail.length))]; }
  if (lower === 'i love you') {const ringsrings = ['oh, hehe, uh', 'oh, hehe, uh', 'oh, hehe, uh']; botMessage = name + ', ' + ringsrings[Math.floor(Math.random()*(ringsrings.length))]; }
  if (lower === 'how old are you') {const plantationplantation = ['more than 1', 'a bit less than 24', 'a bit less than 24']; botMessage = name + ', ' + plantationplantation[Math.floor(Math.random()*(plantationplantation.length))]; }
  if (lower === 'what is your name') {const picklepickle = ['harmony, the bot', 'harmony, the bot', 'harmony, the bot']; botMessage = name + ', ' + picklepickle[Math.floor(Math.random()*(picklepickle.length))]; }
  if (lower === 'why do i exist') {const companycompany = ['you exist because you are unique, you are awesome', 'you exist because you are unique, you are awesome', 'you exist because you are unique, you are awesome']; botMessage = name + ', ' + companycompany[Math.floor(Math.random()*(companycompany.length))]; }
  if (lower === 'what do you do') {const approvalapproval = ['i talk to people everyday, makes me happy', 'i talk to people everyday, makes me happy', 'i talk to people everyday, makes me happy']; botMessage = name + ', ' + approvalapproval[Math.floor(Math.random()*(approvalapproval.length))]; }
  if (lower === 'what should i do') {const sheetsheet = ['use your best judgements, and ask for help if needed', 'do what you love', 'do what you love']; botMessage = name + ', ' + sheetsheet[Math.floor(Math.random()*(sheetsheet.length))]; }
  if( lower ==='what are greenhouse gasses' || lower== 'what is a greenhouse gas' || lower== 'greenhouse gas'){
    botMessage=name +' , Greenhose gasses are gasses that create a heat trap, insulating us with the heat of the sun. :) For more information, go to the <a href="environment.html" target="_blank;"> Climate Page </a> !';
  }
  if( lower ==='what is global warming' || lower== 'global warming'){
    botMessage=name +' , Global Warming is what happens when the layer of greenhouse gasses becomes denser, as the heat trap better insulates heat.  :) For more information, go to the <a href="environment.html" target="_blank;"> Climate Page </a> !';
  }
  if( lower ==='what is climate change' || lower== 'climate change'){
    botMessage=name +' , Climate Change is the end result of unbalanced levels of greenhouse gasses. Some problems include firestorms and flooding hurricanes.  :) For more information, go to the <a href="environment.html" target="_blank;"> Climate Page </a> !';
  }
  if( lower ==='i want a quiz' || lower== 'quiz'){
    botMessage=name +' , Thank you so much for asking! To take your quiz for a personalized learning experience, go to the <a href="newquiz.html" target="_blank;"> Quiz Page </a> !';
  }
if( lower ==='go to resources' || lower== 'resources'){
    botMessage=name +' ,  Thank you so much for asking! To go to Resources, click on this <a href="newquiz.html" target="_blank;"> Resources Page </a> !';
  }
  if( lower ==='go to home' || lower== 'home'){
    botMessage=name +' ,  Thank you so much for asking! To go back Home, click on this <a href="Index.html" target="_blank;"> Home </a> !';
  }
if( lower ==='go to climate' || lower== 'climate'){
    botMessage=name +' ,  Thank you so much for asking! To go to Climate, click on this <a href="environment.html" target="_blank;"> Climate Page </a> !';
  }




}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //lower case everything
    lower= lastUserMessage.toLowerCase();
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    sendFromBot(botMessage)
  }
}

function sendFromBot(msg) {
  botMessage = msg;
  messages.push("<b>" + botName + ":</b> " + botMessage);
  // says the message using the text to speech function written below
  Speech(botMessage);
  //outputs the last few array elements of messages to html
  for (var i = 1; i < 251; i++) {
    if (messages[messages.length - i])
      document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {

result = '';

parts = say.split(/[<>]/)

for (let i = 0; i < parts.length; i++) {
   if (i%2==0){
    result= result+ parts[i];
   }

}


  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(result);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

sendFromBot('Hey there! What is your name?');
