const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hola' },
        { id: 3, message: 'Hallo' },
        { id: 4, message: 'Ahoj' },
        { id: 5, message: 'Bonjour' },
        { id: 6, message: 'Привет' }
    ],




    dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Den' },
        { id: 4, name: 'Marry' },
        { id: 5, name: 'Kate' },
        { id: 6, name: 'Alex' }
    ],
    newMessageBody: "text here smth "

};


const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body

            };


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 9, message: body }],
                newMessageBody: '',
            };


        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;