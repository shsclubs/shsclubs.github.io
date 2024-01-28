clubDiv = document.getElementById("clubs")
buttonDiv = document.getElementById("buttons")

function addClub(club){
    let button = "<a href=\"#" + club.nick + "\"><button>" +  club.nick + "</button></a>"
    let name = "<a id=\"" + club.nick + "\"></a><h3>" + club.name + "</h3>"
    let desc = "<p><strong>Description:</strong> " + club.desc + "</p>"
    let adv = "<p><strong>Advisor:</strong> " + club.adv + "</p>"
    let stucon = "<p><strong>Student Contacts:</strong> " + club.stucon + "</p>"
    let meetingdays = "<p><strong>Meeting Days:</strong> " + club.meetingdays + "</p>"
    let loc = "<p><strong>Location:</strong> " + club.loc + "</p>"
    let text = name + desc + adv + stucon + meetingdays + loc
    clubDiv.innerHTML += text
    buttonDiv.innerHTML += button
    console.log(button)
    console.log(name)
}

for (i =0; i<clublist.length; i++){
    let club = clublist[i]
    if (club.type1 === "Entertainment"){
        addClub(club)
    } else if (club.type2 === "Entertainment") {
        addClub(club)
    }
}