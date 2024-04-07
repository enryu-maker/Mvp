const initialState = {
    access: null,
    events: [],
    eventteacher: [],
    participated: [],
    is_teacher: null,
    sub: [],
    college: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                is_teacher: action.payload.is_teacher
            };
        case "PARTI":
            return {
                ...state,
                participated: action.payload,
            };
        case "SUB":
            return {
                ...state,
                sub: action.payload,
            };
        case "CLG":
            return {
                ...state,
                college: action.payload,
            };
        case "EVENTS":
            return {
                ...state,
                events: action.payload,
            };
        case "EVENTT":
            return {
                ...state,
                eventteacher: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                access: null,
                is_teacher: null
            };
        default:
            return state;
    }
}