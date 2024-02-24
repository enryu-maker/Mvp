const initialState = {
    access: null,
    events: [],
    participated: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
            };
        case "PARTI":
            return {
                ...state,
                participated: action.payload,
            };
        case "EVENTS":
            return {
                ...state,
                events: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                access: null,
            };
        default:
            return state;
    }
}