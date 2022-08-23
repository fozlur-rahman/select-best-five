document.getElementById('player-btn').addEventListener('click', function () {
    const playerInput = document.getElementById('player-input');
    const playerInputText = playerInput.value;
    const playerQuant = document.getElementById('players-list').childNodes.length - 1;
    console.log(playerQuant);
    const playerCost = playerInputText * playerQuant;
    const playerTotalCost = document.getElementById('player-total-cost').innerText = playerCost;
    playerInput.value = '';
})

document.getElementById