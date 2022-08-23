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
}
// document.querySelector().addEventListener('click', function () {
//     const addbtn = document.getElementById('add-btn');
//     addbtn.style.backgroundColor = 'gray'
//     addbtn.disabled = true;
// })
function disableButton(element) {
    const addbtn = document.querySelector('.add-btn');
    addbtn.style.backgroundColor = 'gray'
    addbtn.disabled = true;
}

function addToList(element) {
    const player = element.parentNode.children[0].innerText;
    const playerDetails = {
        playerName: player,
    }
    players.push(playerDetails);
    displayPlayers(players);
    disableButton(element)
}

