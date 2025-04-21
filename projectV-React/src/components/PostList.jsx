import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    
    if (!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
              Sorry, but posts were not found.
            </h1>
        )
    }

    return (
        <div>  
            <h2>{title}</h2>
            {posts.map((post, index ) =>
                <PostItem remove={remove} number = {index + 1} post={post} key={post.id}/>
            )}        
        </div>
    );
};

export default PostList;
