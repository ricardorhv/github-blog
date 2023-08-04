import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { useContext } from "react";
import { PostContext } from "./context/PostContext";
import { Post } from "./pages/Post";

export function Router() {
  const { posts } = useContext(PostContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        {
          posts.map(post => (
            <Route key={post.title} path={post.title} element={<Post {...post}/>}/>
          ))
        }
      </Route>
    </Routes>
  )
}
