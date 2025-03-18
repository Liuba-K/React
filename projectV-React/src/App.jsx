import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

import ClassCounter from './components/ClassCounter.jsx'
import Counter from './components/Counter.jsx'
import PostList from './components/PostList.jsx'
import MyButton from './components/UI/button/Mybutton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import PostForm from './components/PostForm.jsx'
import MySelect from './components/UI/select/MySelect.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([
    {id:1, dayweek: 'Monday', task: 'drd', description: 'fhjk'},
    {id:2, dayweek: 'Tuesday', task: 'drd', description: 'fhjk'},
    {id:3, dayweek: 'ff', task: 'drd', description: 'fhjk'},
  ])

  const [selectedSort,setSelectedSort] = useState()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))

  }

  return (
    <>
      <div><h1>Hello, Olga</h1></div>
      <div className='List'>
        <PostForm  create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Sorting"
            options={[
              {value: 'task', name: 'by task'},
              {value: 'description', name: 'by name'},
            ]}
          />
        </div>
        {posts.length 
          ? <PostList remove={removePost} posts={posts} title= 'Week 1'/>
          : <h1 style={{textAlign: 'center'}}>
              Sorry, but posts were not found.
            </h1>
        }
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
