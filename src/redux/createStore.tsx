export default function createStore(reducer: any, init: any) {

    let currentState = typeof init === "function" ? init() : init || {};
    let currentReducer = reducer;
    let currentListeners = [];
    let nextListeners = currentListeners;
    let isDispatching = false;

    function dispatch(action: any) {
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        }finally{
            isDispatching = false;
        }
    }

    function getState() {
        return currentState
    }

    function subscribe() {
        return currentState
    }

    const store = {
        dispatch,
        getState,
        subscribe,
    }
    return store;
}