import {createStore} from 'https://cdn.skypack.dev/redux';


// Khởi tạo reducer
function reducer(state = 0, action) {
    switch(action.type) {
        case 'DEPOSIT':
            return state + action.payload
        case 'WITHDRAW':
            return state - action.payload
        default:
            return state
    }
}

// Khởi tạo store
let store = window.store = createStore(reducer)

// actinon
function actionDeposit(dollars) {
    return {
        type: 'DEPOSIT',
        payload: dollars
    }
}


function actionWithdraw(dollars) {
    return {
        type: 'WITHDRAW',
        payload: dollars
    }
}


// HandleEvent
let deposit = document.querySelector('#deposit')
let withdraw = document.querySelector('#withdraw')

deposit.onclick = function() {
    store.dispatch(actionDeposit(10))
    render()
}

withdraw.onclick = function() {
    store.dispatch(actionWithdraw(10))
    render()
}

// render
function render() {
    let output = document.querySelector('#output')
    output.innerHTML = store.getState()
}

render()
