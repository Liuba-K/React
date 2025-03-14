import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

import ClassCounter from './components/ClassCounter.jsx'
import Counter from './components/Counter.jsx'
import PostItem from './components/PostItem.jsx'
import PostList from './components/PostList.jsx'
import MyButton from './components/UI/button/Mybutton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([
    {id:1, dayweek: 'Monday', task: 'drd', description: 'fhjk'},
    {id:2, dayweek: 'Tuesday', task: 'drd', description: 'fhjk'},
    {id:3, dayweek: 'ff', task: 'drd', description: 'fhjk'},
  ])

  const [title, setTitle] = useState('fghg')
  const bodyInputRef = useRef();

  const addNewList = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)

  }

  return (
    <>
      <div><h1>Hello, Olga</h1></div>
      <div className='List'>
        <form>
          {/*Управляемый компонент */}
          <MyInput 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder=" название списка"
          /> 
          {/*Неуправляемый\Неконтролируеемый компонент */}         
          <MyInput 
            ref={bodyInputRef}
            type="text" placeholder=" название списка"/>
          <MyButton onClick={addNewList}>Create</MyButton>
        </form>
        <PostList posts={posts} title= 'Week 1'/>
        

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
