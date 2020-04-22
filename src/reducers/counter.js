export const counterReducer = (state, {type}) => {
    switch(type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
            default:
             return 0;
    }
}