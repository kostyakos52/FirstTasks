function nameHockeyGameWinner(redTeam, score, blueTeam) {
    let scores = score.split(":");
    scores[2] = "";

    let OT = "with score";
    if (score.search("OT")) {
        OT = "in OT with score";
        scores[1] = scores[1].substr(0, scores[1].length - 2);
        scores[2] = "OT";
    }

    if (scores[0] > scores[1]) {
        return `${redTeam} defeat ${blueTeam} ${OT} ${score}`;
    }
    else {
        return `${blueTeam} defeat ${redTeam} ${OT} ${scores[1]}:${scores[0]}${scores[2]}`;
    }
}

let form = document.forms["scoreData"];
document.getElementById("scoreDataButton").addEventListener("click", () => {
    let redTeamName = form.elements[0].value;
    if (!redTeamName.length) {
        alert("invalid data");
        return;
    }
    let score = form.elements[1].value;
    if (!redTeamName.length) {
        alert("invalid data");
        return;
    }
    let blueTeamName = form.elements[2].value;
    if (!redTeamName.length) {
        alert("invalid data");
        return;
    }

    document.getElementById("scoreRoll").textContent = nameHockeyGameWinner(redTeamName, score, blueTeamName);
})