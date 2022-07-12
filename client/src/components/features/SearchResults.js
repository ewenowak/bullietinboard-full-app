import React from 'react';
import AllPosts from './AllPosts';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import { getFilteredPosts } from '../../redux/postsReducer';


const SearchResults = () => {
  const {searchPhrase} = useParams();
  console.log ('searchPhrase', searchPhrase);
  const posts = useSelector(state => getFilteredPosts(state, searchPhrase));

  if (posts.length !== 0)
    return (
      <div>
        <h2>Results for: {searchPhrase}</h2>
        <AllPosts posts={posts} />
      </div>
    );
  else return <h3>Sorry, we not found results</h3>;
};

export default SearchResults;
