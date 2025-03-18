import React from "react";
import MyButton from "./UI/button/Mybutton";

const PostItem = (props) => {
    
    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.post.dayweek}</strong>
                <div>
                    <h3>{props.number}. {props.post.task}</h3>
                    <p>{props.post.description}</p>

                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>
                        Delete
                        </MyButton>
                </div>

            </div>

        </div>
    );
};

export default PostItem;