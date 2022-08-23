const players = [];
// add player in list item with create element funtion 
function displayPlayers(addPlayers) {
    const playersList = document.getElementById('players-list');
    playersList.innerText = "";
    for (let i = 0; i < addPlayers.length; i++) {
        const name = players[i].playerName;

        const li = document.createElement('li');
        li.innerText = name;
        if (playersList.childNodes.length < 5) {
            playersList.appendChild(li);
        } else {
            return alert('Already Five selected');
        }
    }

}

// addEventListener for all card btn funtion
function addToList(element) {
    const player = element.parentNode.children[0].innerText;
    const playerDetails = {
        playerName: player,
    }
    players.push(playerDetails);
    console.log(players);
    displayPlayers(players);
    element.disabled = true;
    element.style.backgroundColor = " gray";
}

