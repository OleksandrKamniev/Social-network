import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likes} />);

    let newPostsElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>

            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement}
                    value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div >
    )
}
export default MyPosts;