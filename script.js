import clubList from "./data/clubList.js";

//An example of how to do dropdown menus

/*$("#button-container button").on("click", function(event) {
  if (isHidden) {
    hiddenBox.show();
    isHidden=false;
  }else{
    hiddenBox.hide();
    isHidden=true;
  }
});*/

function populateClubs(day) {
  const dayId = day + "aclubs";
  const aft = document.getElementById(dayId);
  for (let i = 0; i < clubList.length; i++) {
    let club = clubList[i];
    if (club.mtg === day) {
      aft.innerHTML +=
        '<a href="clubs?category=' +
        club.type1 +
        "#" +
        club.nick +
        '">' +
        club.name +
        " (" +
        club.loc +
        ")</a><br>";
    }
  }
}

populateClubs("m");
populateClubs("t");
populateClubs("w");
populateClubs("h");
populateClubs("f");
populateClubs("o");

document.getElementById("ma").addEventListener("click", matoggle);

function matoggle() {
  document.getElementById("maclubs").classList.toggle("collapsed");
  document.getElementById("maup").classList.toggle("collapsed");
  document.getElementById("madown").classList.toggle("collapsed");
}

document.getElementById("ta").addEventListener("click", tatoggle);

function tatoggle() {
  document.getElementById("taclubs").classList.toggle("collapsed");
  document.getElementById("taup").classList.toggle("collapsed");
  document.getElementById("tadown").classList.toggle("collapsed");
}

document.getElementById("wa").addEventListener("click", watoggle);

function watoggle() {
  document.getElementById("waclubs").classList.toggle("collapsed");
  document.getElementById("waup").classList.toggle("collapsed");
  document.getElementById("wadown").classList.toggle("collapsed");
}

document.getElementById("ha").addEventListener("click", hatoggle);

function hatoggle() {
  document.getElementById("haclubs").classList.toggle("collapsed");
  document.getElementById("haup").classList.toggle("collapsed");
  document.getElementById("hadown").classList.toggle("collapsed");
}

document.getElementById("fa").addEventListener("click", fatoggle);

function fatoggle() {
  document.getElementById("faclubs").classList.toggle("collapsed");
  document.getElementById("faup").classList.toggle("collapsed");
  document.getElementById("fadown").classList.toggle("collapsed");
}

document.getElementById("oa").addEventListener("click", othertoggle);

function othertoggle() {
  document.getElementById("oaclubs").classList.toggle("collapsed");
  document.getElementById("oaup").classList.toggle("collapsed");
  document.getElementById("oadown").classList.toggle("collapsed");
}
