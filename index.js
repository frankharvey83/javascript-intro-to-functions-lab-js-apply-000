function shout(string) {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  console.log(string.toUpperCase())
};

function logWhisper(string) {
  console.log(string.toLowerCase())
};

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  if (string === lowercase) {
    return "I can't hear you!";
  }
};

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase();
  if (string === uppercase) {
    return "YES INDEED!";
  }
};

function sayHiToGrandma(string) {
  var loveYou = "I love you, Grandma.";
  if (string === loveYou) {
    return "I love you, too.";
  }
};
