import React from 'react';
import {useState} from 'react';
import MyButton from './UI/button/Mybutton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({task:'', description:''})
    
    const addNewList = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }  
        create(newPost)
        setPost({task: '', description: ''})
      }
    return (
        <form>
          {/*Управляемый компонент */}
          <MyInput 
            value={post.task}
            onChange={e => setPost({...post, task: e.target.value})}
            type="text" 
            placeholder="Task"
          /> 
                 
          <MyInput 
            value={post.description}
            onChange={e => setPost({...post, description: e.target.value})}
            type="text" placeholder="Description"/>
          <MyButton onClick={addNewList}>Create</MyButton>
        </form>

    );
};

export default PostForm;
