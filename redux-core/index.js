const redux = require("redux");
const reduxLogger = require("redux-logger");

const createstore = redux.createStore

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buy_icecream() {
  return {
    type: BUY_ICECREAM,
    info: "first redux Action",
  };
}
function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "first redux Action",t
  };
}

const initialState = {
  numofIcecream: 10,
};

const initialState2 = {
  numOfCake: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numofIcecream: state.numofIcecream - 1,
      };
      default:return state
  }
};

const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numofIcecream: state.numofIcecream - 1,
      };
      default:return state
  }
};

const store = createstore(reducer)

const store2 = createstore(reducer2)


console.log('Initialstate', store.getState())
console.log('Initialstate', store2.getState())

const unsubscribe = store.subscribe(() => console.log('Updated state' , store.getState())
)
const unsubscribe2 = store2.subscribe(() => console.log('Updated state' , store2.getState())
)

store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())

store2.dispatch(buy_cake())
store2.dispatch(buy_cake())
store2.dispatch(buy_cake())


unsubscribe()
unsubscribe2()