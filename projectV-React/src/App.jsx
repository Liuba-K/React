import { useMemo, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';

import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx'

import PostList from './components/PostList.jsx';
import PostForm from './components/PostForm.jsx';
import PostFilter from './components/PostFilter.jsx';
import MyButton from './components/UI/button/Mybutton.jsx';

import MyModal from './components/UI/MyModal/myModal.jsx';
import { usePosts } from './hooks/usePosts.js';

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([ ])
  const [filter,setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchchedPost = usePosts(posts, filter.sort, filter.query);
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <>
      <div><h1>Hello, Olga</h1></div>
      <div className='List'>
        <MyButton onClick={() => setModal(true)}>
          Created Task
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm  create={createPost}/>
        </MyModal>
        
        <hr style={{margin: '15px 0'}}/>
        <PostFilter 
          filter= {filter}
          setFilter={setFilter}
        />
        <PostList remove={removePost} 
            posts={sortedAndSearchchedPost} title= 'Week 1'/>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <ClassCounter/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
