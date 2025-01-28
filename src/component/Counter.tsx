import { useReducer } from 'react';
const intialState = {
  ////akhane amra initialState variable ar moddhe akta object ar moddhe count nam aa akta state niyechi and tar value 0 set kore diyechi initial eee and amra chaile akhane r oo state define korete kari amader ai object ar moddhe and oi state gulor initial value set kore dite pari
  count: 0,
};
type counterStateType = {
  /////akhane ami type defiye korechi amder state ar jemon amader count state ar type ta hocche number tai tkhane number diye diyechi and ai type take ai counterStateType ar moddhe store kore diyechi
  count: number;
};

/// akhane amader INCREMENT,DECREMENT,RESET oonek bar likhte hobe tai typing mistake jeno na hoy tar jonno ami akhane  Constrain create korechi mane variable ar moddhe amader string gulo rekhechi
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';

////akhane amader action ar type ki hobe Tar jonno type define kore diyechi jemon ami bolechi amader action ar type ta hobe "INCREMENT"  and ai  type take ami ai IncrementActionType ar moddhe store kore diyechi amra chaile type: "INCREMENT" aivabe na likhe  type: typeof INCREMENT ai vabe oo likhte partam akhane INCREMENT hocche amader constrain ba variable and ami typeof diye bolechi amader INCREMENT constrain ba variable ar  value ta jei type ar ache ba jeita ache oita hobe
type IncrementActionType = { type: typeof INCREMENT };
type DecrementActionType = { type: typeof DECREMENT };
type ResetActionType = { type: typeof RESET };
type INCREMENTBYAMOUNT = { type: typeof INCREMENTBYAMOUNT; payload: number };

type CounterActionType =
  | IncrementActionType
  | DecrementActionType
  | ResetActionType
  | INCREMENTBYAMOUNT;

const reducer = (state: counterStateType, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: INCREMENTBYAMOUNT, payload: 5 });
        }}
      >
        IncrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
        disabled={state.count <= 0}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
