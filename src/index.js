// write your createStore function here, this function should return an object with 2 methods - getState, dispatch

function createStore(reducer) {
  let state;

  function dispatch(action) {    // takes in an action, updates the state                                   using the reducer and calls the render                                     function
    state = candyReducer(state, action);
    render();
  }

  function getState() {     // returns current state
    return state;
  };

  return {
    dispatch,
    getState
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT'})

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch