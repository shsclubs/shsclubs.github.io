import clubList, { convertCategoryNameToPrettyName } from "./data/clubList.js";

const pageName = document.getElementById("page-name");
const pageDescription = document.getElementById("page-description");
const clubDiv = document.getElementById("clubs");
const buttonDiv = document.getElementById("buttons");

function updatePageNameAndDescription(category) {
  const prettyName = convertCategoryNameToPrettyName(category);
  pageName.innerHTML = prettyName;
  pageDescription.innerHTML = "Clubs to learn about " + prettyName + ".";
}

function addClub(club) {
  let button =
    '<a href="#' + club.nick + '"><button>' + club.nick + "</button></a>";
  let name = '<a id="' + club.nick + '"></a><h3>' + club.name + "</h3>";
  let desc = "<p><strong>Description:</strong> " + club.desc + "</p>";
  let adv = "<p><strong>Advisor:</strong> " + club.adv + "</p>";
  let stucon = "<p><strong>Student Contacts:</strong> " + club.stucon + "</p>";
  let meetingdays =
    "<p><strong>Meeting Days:</strong> " + club.meetingdays + "</p>";
  let loc = "<p><strong>Location:</strong> " + club.loc + "</p>";
  let text = name + desc + adv + stucon + meetingdays + loc;
  clubDiv.innerHTML += text;
  buttonDiv.innerHTML += button;
}

function buildPage() {
  const category = getCategoryFromURL();
  if (!category) return;
  updatePageNameAndDescription(category);

  for (let i = 0; i < clubList.length; i++) {
    let club = clubList[i];
    if (club.type1 === category) {
      addClub(club);
    } else if (club.type2 === category) {
      addClub(club);
    }
  }
}

function getCategoryFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("category");
  return category;
}

document.addEventListener("DOMContentLoaded", function () {
  buildPage();
});

buildPage();
