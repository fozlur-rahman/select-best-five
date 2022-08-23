document.getElementById('player-btn').addEventListener('click', function () {
    const playerInput = document.getElementById('player-input');
    const playerInputText = playerInput.value;
    if (playerInput.value == '') {
        return alert('Give the input first !');
    } else {
        const playerQuant = document.getElementById('players-list').childNodes.length;
        // console.log(playerQuant);
        const playerCost = playerInputText * playerQuant;
        const playerTotalCost = document.getElementById('player-total-cost').innerText = playerCost;
        playerInput.value = '';
    }
    
})

document.getElementById('total-btn').addEventListener('click', function () {
    const managerCost = document.getElementById('manager-cost');
    const managerCostText = managerCost.value;

    const couchCost = document.getElementById('couch-cost');
    const couchCostText = couchCost.value;
    if (couchCost.value == '' || managerCost.value == '') {
        return alert('Give the input first !');
    } else {
        const playerTotalCost = document.getElementById('player-total-cost').innerText;

        const preoTotalText = document.getElementById('total-amount');
        // const preTotalAmount = preoTotalText.innerText;
        // console.log(preTotalAmount);
        const totalCost = parseInt(playerTotalCost) + parseInt(managerCostText) + parseInt(couchCostText);
        preoTotalText.innerText = totalCost;
        console.log(totalCost);
        managerCost.value = '';
        couchCost.value = '';
    }


})