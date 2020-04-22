export const loginReducer = (state, {type}) => {
    switch(type) {
        case 'LOGIN':
            return !state; 
            default:
             return false;
    }
}