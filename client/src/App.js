import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/views/NavBar";
import Home from "./components/pages/Home";
import PostPage from "./components/pages/PostPage";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import NotFound from "./components/pages/NotFound";
import SearchResults from "./components/features/SearchResults";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGetAllPosts } from "./redux/postsReducer";


const App = () => {
  
  return (
    <main>
      <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/post/:id" element={ <PostPage /> } />
            <Route path="/post/add" element={ <PostAdd /> } />
            <Route path="/post/edit/:id" element={ <PostEdit /> } />
            <Route path="/search/:searchPhrase" element={<SearchResults />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Container>
    </main>
  );
};

export default App;

