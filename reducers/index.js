export default (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.count += 1;
            break;
        case 'DECREMENT':
            state.count -= 1;
            break;
        default:
            break;
    }
    return { ...state };
}
