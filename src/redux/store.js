import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
    _state: {
        
        
},
    _callSubscriber() {
    console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;

// export let store = {
    //     state: {
    //         profilePage: {
    //             posts: [
    //                 { message: "Hey, how are you doing?", likes: 15 },
    //                 { message: "I am doing well)", likes: 20 },
    //                 { message: "I am about to delete this page", likes: 23 },
    //                 { message: "OMG", likes: 26 },
    //             ],
    //             newPostText: "text here smth "
    //         },
    //         dialogsPage: {
    //             messages: [
    //                 { id: 1, message: 'Hi' },
    //                 { id: 2, message: 'Hola' },
    //                 { id: 3, message: 'Hallo' },
    //                 { id: 4, message: 'Ahoj' },
    //                 { id: 5, message: 'Bonjour' },
    //                 { id: 6, message: 'Привет' }
    //             ],
    
    
    
    //             dialogs: [
    //                 { id: 1, name: 'John' },
    //                 { id: 2, name: 'Ben' },
    //                 { id: 3, name: 'Den' },
    //                 { id: 4, name: 'Marry' },
    //                 { id: 5, name: 'Kate' },
    //                 { id: 6, name: 'Alex' }
    //             ]
    //         },
    //         navbar: {
    //             friends: [
    //                 { friendName: 'John' },
    //                 { friendName: 'Ben' },
    //                 { friendName: 'Dany' },
    //             ]
    //         }
    //     },
    //     addPost() {
    //         let newPost = {
    //             id: 5,
    //             message: state.profilePage.newPostText,
    //             likes: 0,
    //         };
    
    //         state.profilePage.posts.push(newPost);
    //         state.profilePage.newPostText = '';
    //         rerenderEntireTree(state);
    //     },
    //     updateNewPostText(newText) {
    //         state.profilePage.newPostText = newText;
    //         rerenderEntireTree(state);
    //     },
    //     subscribe(observer) {
    //         rerenderEntireTree = observer;
    //     }
    // }
    
    