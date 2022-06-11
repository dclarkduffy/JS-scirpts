//If we find the preferred indicator of 1001, home becomes work, cell becomes home, and preferred is preferred and cell. Otherwise, normal workflow.

var home = null;
var cell = null;
var work = null;
var preferred = null;
var firstThirteenNum = "999-999-9999";
var firstThirteenType = "1001";
var secThirteenNum = "555-555-5555";
var secThirteenType = "7";
var thirThirteenNum = "215-630-1383";
var thirThirteenType = "1";
var firstFourteenNum = "222-222-2222";
var firstFourteenType = "8";
var typesFound = [];

if (firstThirteenType) typesFound.push([firstThirteenNum, firstThirteenType]);
if (secThirteenType) typesFound.push([secThirteenNum, secThirteenType]);
if (thirThirteenType) typesFound.push([thirThirteenNum, thirThirteenType]);
if (firstFourteenType) typesFound.push([firstFourteenNum, firstFourteenType]);

var testLogic = true;

if (testLogic) {
  console.log(typesFound); //Will need to convert this to mirth channel map

  //Locate cell number if exists
  for (var i = 0; i < typesFound.length; i++) {
    for (var j = 0; j < typesFound.length; j++) {
      if (typesFound[i][j] == "1") {
        cell = typesFound[i][0];
      }
    }
  }

  //Locate home number if exists
  for (var i = 0; i < typesFound.length; i++) {
    for (var j = 0; j < typesFound.length; j++) {
      if (typesFound[i][j] == "7") {
        home = typesFound[i][0];
      }
    }
  }

  //Locate work number if exists
  for (var i = 0; i < typesFound.length; i++) {
    for (var j = 0; j < typesFound.length; j++) {
      if (typesFound[i][j] == "8") {
        work = typesFound[i][0];
      }
    }
  }

  //Locate preferred number if exists
  for (var i = 0; i < typesFound.length; i++) {
    for (var j = 0; j < typesFound.length; j++) {
      if (typesFound[i][j] == "1001") {
        preferred = typesFound[i][0];
      }
    }
  }
}

//Check if preferred exists and if so apply custom logic
if (preferred) {
  work = home;
  home = cell;
  cell = preferred = preferred;
}

//Will need to convert this to mirth channel map
console.log(`home:        ${home}, 
cell:        ${cell}, 
work:        ${work}, 
preferred:   ${preferred}.`);
