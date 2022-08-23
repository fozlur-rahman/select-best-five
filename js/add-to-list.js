const players = [];
function displayPlayers(addPlayers) {
    const playersList = document.getElementById('players-list');
    for (let i = 0; i < addPlayers.length; i++) {
        const name = players[i].playerName;
        const li = document.createElement('li');
        li.innerText = name;
        console.log(name)
        playersList.appendChild(li);
    }
    if (addPlayers.length >= 5) {
        return alert('Already Five selected');
    }
}
// document.getElementById('add-btn-1')('click', function () {
    
// })
function addToList(element) {
    const player = element.parentNode.children[0].innerText;
    const playerDetails = {
        playerName: player,
    }
    players.push(playerDetails);
    displayPlayers(players);
    element.disabled = true;    
}

