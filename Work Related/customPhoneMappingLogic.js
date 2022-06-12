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

//Will need to convert this to mirth channel map
console.log(`BEFORE:
home:        ${home}, 
cell:        ${cell}, 
work:        ${work}, 
preferred:   ${preferred}.`);

//Final analysis to figure out if any values to reassign. (LEFT SIDE WILL BE REPLACES WITH PAYLOAD FIELD)

//Pref exists and doesn't match either three fields
if (
  preferred &&
  (preferred != home || preferred != cell || preferred != work)
) {
  work = home;
  home = cell;
  cell = preferred = preferred;
}

//Pref exists and doesn't match when only cell and work are given
if (preferred && cell && work && (preferred != cell || preferred != work)) {
  work = work;
  cell = cell;
  home = preferred = preferred;
}

//Pref exists and doesn't match when only home and work are given
if (preferred && home && work && (preferred != home || preferred != work)) {
  work = work;
  home = home;
  cell = preferred = preferred;
}

//Pref exists and doesn't match when only home and cell is given
if (preferred && home && cell && (preferred != home || preferred != cell)) {
  cell = cell;
  home = home;
  work = preferred = preferred;
}

//Pref exists and doesn't match when only work is given
if (preferred && work && preferred != work) {
  work = work;
  cell = preferred = preferred;
}

//Pref exists and doesn't match when only cell is given
if (preferred && cell && preferred != cell) {
  cell = cell;
  home = preferred = preferred;
}

//Pref exists and doesn't match when only home is given
if (preferred && home && preferred != home) {
  home = home;
  cell = preferred = preferred;
}

//Pref exists and matches one of the three fields given ( home, cell or work )
if (
  preferred &&
  home &&
  cell &&
  work &&
  (preferred == home || preferred == cell || preferred == work)
) {
  cell = cell;
  work = work;
  home = home;
  preferred = preferred;
}

//Will need to convert this to mirth channel map
console.log(`AFTER:
home:        ${home}, 
cell:        ${cell}, 
work:        ${work}, 
preferred:   ${preferred}.`);
