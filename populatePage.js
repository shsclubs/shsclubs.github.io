//Gets the elements of the page that change based on category
const title = document.getElementById("title");
const pageName = document.getElementById("page-name");
const pageDescription = document.getElementById("page-description");
const clubDiv = document.getElementById("clubs");
const buttonDiv = document.getElementById("buttons");
const clubFooter = document.getElementById("clubFooter");

function updatePageNameAndDescription(category) {
    const prettyName = convertCategoryNameToPrettyName(category);
    
    //changes the webpage title
    title.innerHTML = "SHS Clubs > " + prettyName;
    pageName.innerHTML = prettyName + " Clubs";
    pageDescription.innerHTML = "Clubs to learn about " + prettyName + ".";
}

function addClub(club, odd) {
    
    //setting the values of the club attributes
    let button = '<a href="#' + club.nick + '"><button>' + club.nick + "</button></a>";
    let name = '<a id="' + club.nick + '"></a><h3>' + club.name + "</h3>";
    let desc = "<p><strong>Description:</strong> " + club.desc + "</p>";
    let adv = "<p><strong>Advisor:</strong> " + club.adv + "</p>";
    let stucon = "<p><strong>Student Contacts:</strong> " + club.stucon + "</p>";
    let meetingdays = "<p><strong>Meeting Days:</strong> " + club.meetingdays + "</p>";
    let loc = "<p><strong>Location:</strong> " + club.loc + "</p>";
    let text = `<div ${odd ? 'class="odd-club club"' : 'class="club"'}>` + name + desc + adv + stucon + meetingdays + loc +  "</div>";
    
    //adds the button at the top and club info
    buttonDiv.innerHTML += button;
    clubDiv.innerHTML += text;
}

function buildPage() {

    //changes the page info if the category changes
    const category = getCategoryFromURL();
    if (!category) return;
    updatePageNameAndDescription(category);

    //checks if the club is in the page's category, and if so, adds it to the page
    let clubsOnPage = 0;
    for (let i = 0; i < clubList.length; i++) {
        let club = clubList[i];
        if (club.type1 === category || club.type2 === category) {
            addClub(club, (clubsOnPage + 1) % 2 === 0);
            clubsOnPage += 1;
        }
    }

    clubFooter.style.display = 'block';
}

function getCategoryFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("category");
  return category;
}

function convertCategoryNameToPrettyName(category) {
    switch (category) {
      case "Academic":
        return "Academics";
      case "Culture":
        return "Culture and Identity";
      case "Performing":
        return "Performing Arts";
      case "Visual":
        return "Visual Arts";
      case "SocialChange":
        return "Social Change";
      case "Leadership":
        return "Leadership & Speaking";
      case "Pre-Professional":
        return "Pre-Professional";
      case "Athletic":
        return "Athletics";
      case "Entertainment":
        return "Entertainment";
      case "Health":
        return "Health & Medicine";
      case "Humanities":
        return "Humanities";
      case "STEM":
        return "STEM";
      case "Misc":
        return "Miscellaneous";
      default:
        return "Test";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  buildPage();
});