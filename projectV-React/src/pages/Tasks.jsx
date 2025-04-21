import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList.jsx';
import MyButton from '../components/UI/button/MyButton.jsx';
import PostForm from '../components/PostForm.jsx';
import PostFilter from '../components/PostFilter.jsx';
import MyModal from '../components/UI/MyModal/myModal.jsx';
import { usePosts } from '../hooks/usePosts.js';
import PostService from '../API/PostService.js';
import { useFetching } from '../hooks/useFetching.js';
import Loader from '../components/UI/Loader/Loader.jsx';
import { getPageCount, getPagesArray } from '../utils/page.js';
import Pagination from '../components/UI/pagination/Pagination.jsx';

import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import ClassCounter from '../components/ClassCounter.jsx';

function Posts() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([ ])
  const [filter,setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchchedPost = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })
  

  useEffect(() => {
    fetchPosts() 
  },[page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <>
      <div><h1>Hello, Olga</h1></div>
      <div className='List'>
        <button onClick={fetchPosts}>GET POSTS</button> 
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
        {postError &&
          <h1>Error</h1>
        }
        {isPostsLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
          : <PostList remove={removePost} posts={sortedAndSearchchedPost} title= 'Week 1'/>
        }
        <Pagination 
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <ClassCounter/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Posts;
