import { createContext, useReducer } from "react";
const defaultContext = {
  postList: [],
  addPost: () => { },
  deletePost: () => { }
}
const PostList = createContext({
  defaultContext

}

);
const postListReducer = (currentPostList, action) => {
  return currentPostList;
}
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, defaultContext);
  const addPost = () => { }
  const deletePost = () => { }
  return <PostList.Provider value={
    {
      postList: postList,
      addPost: addPost,
      deletePost: deletePost
    }
  }>
    {children}
  </PostList.Provider >
}
export default PostListProvider;