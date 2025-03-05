import React from "react";

const PostItem = (props) => {
    
    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.post.dayweek}</strong>
                <div>
                    <h3>{props.post.id}. {props.post.task}</h3>
                    <p>{props.post.description}</p>

                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>

            </div>

        </div>
    );
};

export default PostItem;