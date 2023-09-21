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

document.getElementById("mm").addEventListener("click", mmtoggle);

function mmtoggle () {
  document.getElementById("mmclubs").classList.toggle("collapsed");
  document.getElementById("mmup").classList.toggle("collapsed");
  document.getElementById("mmdown").classList.toggle("collapsed");
}

document.getElementById("ma").addEventListener("click", matoggle);

function matoggle () {
  document.getElementById("maclubs").classList.toggle("collapsed");
  document.getElementById("maup").classList.toggle("collapsed");
  document.getElementById("madown").classList.toggle("collapsed");
}

document.getElementById("tm").addEventListener("click", tmtoggle);

function tmtoggle () {
  document.getElementById("tmclubs").classList.toggle("collapsed");
  document.getElementById("tmup").classList.toggle("collapsed");
  document.getElementById("tmdown").classList.toggle("collapsed");
}

document.getElementById("ta").addEventListener("click", tatoggle);

function tatoggle () {
  document.getElementById("taclubs").classList.toggle("collapsed");
  document.getElementById("taup").classList.toggle("collapsed");
  document.getElementById("tadown").classList.toggle("collapsed");
}

document.getElementById("wm").addEventListener("click", wmtoggle);

function wmtoggle () {
  document.getElementById("wmclubs").classList.toggle("collapsed");
  document.getElementById("wmup").classList.toggle("collapsed");
  document.getElementById("wmdown").classList.toggle("collapsed");
}

document.getElementById("wa").addEventListener("click", watoggle);

function watoggle () {
  document.getElementById("waclubs").classList.toggle("collapsed");
  document.getElementById("waup").classList.toggle("collapsed");
  document.getElementById("wadown").classList.toggle("collapsed");
}

document.getElementById("hm").addEventListener("click", hmtoggle);

function hmtoggle () {
  document.getElementById("hmclubs").classList.toggle("collapsed");
  document.getElementById("hmup").classList.toggle("collapsed");
  document.getElementById("hmdown").classList.toggle("collapsed");
}

document.getElementById("ha").addEventListener("click", hatoggle);

function hatoggle () {
  document.getElementById("haclubs").classList.toggle("collapsed");
  document.getElementById("haup").classList.toggle("collapsed");
  document.getElementById("hadown").classList.toggle("collapsed");
}

document.getElementById("fm").addEventListener("click", fmtoggle);

function fmtoggle () {
  document.getElementById("fmclubs").classList.toggle("collapsed");
  document.getElementById("fmup").classList.toggle("collapsed");
  document.getElementById("fmdown").classList.toggle("collapsed");
}

document.getElementById("fa").addEventListener("click", fatoggle);

function fatoggle () {
  document.getElementById("faclubs").classList.toggle("collapsed");
  document.getElementById("faup").classList.toggle("collapsed");
  document.getElementById("fadown").classList.toggle("collapsed");
}

document.getElementById("other").addEventListener("click", othertoggle);

function othertoggle () {
  document.getElementById("otherclubs").classList.toggle("collapsed");
  document.getElementById("otherup").classList.toggle("collapsed");
  document.getElementById("otherdown").classList.toggle("collapsed");
}