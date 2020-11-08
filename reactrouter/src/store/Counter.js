import { Action, Reducer } from 'redux';


/* export interface CounterState {
    count: number;
}


export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }
export interface ADD_TO_CART { type: 'ADD_TO_CART'}


export type KnownAction = IncrementCountAction | DecrementCountAction;
export const actionCreators = {
    increment: () => ({ payload:'data',type: 'INCREMENT_COUNT' },
    decrement: () => ({ type: 'DECREMENT_COUNT' },
};



*/


export const reducer = (state, incomingAction) => {
    if (state === undefined) {
        return { count: 0 };
    }
    console.log('incomingAction: '+JSON.stringify(incomingAction))
    const action = incomingAction;
    switch (action.type) {
        case 'INCREMENT_COUNT':
            
        return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
