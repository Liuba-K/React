import React from 'react';
import {useState} from 'react';
import MyButton from './UI/button/Mybutton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({task:'', body:''})
    const addNewList = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }  
        create(newPost)
        newList({task: '', body: ''})
      }
    return (
        <form>
          {/*Управляемый компонент */}
          <MyInput 
            value={post.task}
            onChange={e => setPost({...post, task: e.target.value})}
            type="text" 
            placeholder=" название списка"
          /> 
                 
          <MyInput 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" placeholder=" название списка"/>
          <MyButton onClick={addNewList}>Create</MyButton>
        </form>

    );
};

export default PostForm;
