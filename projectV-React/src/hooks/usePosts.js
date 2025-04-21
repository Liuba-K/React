import { useMemo } from "react";

export const useSortedPosts = (posts,sort) => {
    const sortedPost = useMemo(() => {
         if(sort){
          return [...posts].sort((a,b) => a[sort].localeCompare(b[filter.sort]))
         }
         return posts;
    },[sort, posts])

    return sortedPost;
}

export const usePosts = (posts, sort, query) =>{
    const sortedPost = useSortedPosts(posts, sort);

    const sortedAndSearchchedPost = useMemo(() => {
    return sortedPost.filter(post => post.task.toLowerCase().includes(query.toLowerCase()))

  }, [query,sortedPost])

  return sortedAndSearchchedPost;
}
