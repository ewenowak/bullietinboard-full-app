import React from 'react';
import PostForm from '../features/PostForm';
import { getLoggedUser } from '../../redux/usersReducer';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../../redux/postsReducer';
import {useNavigate} from 'react-router-dom';
import { ListGroup, Card, Image } from 'react-bootstrap';
import NotFound from '../pages/NotFound';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogged = useSelector(state => getLoggedUser(state));
  const handleClick = post => {
    dispatch(addPost(post));
    navigate('/');
  };

  if (!userLogged) return <NotFound />;
  else
    return (
      <div>
        <h3>Add Post</h3>
        <PostForm action={handleClick} actionText="Add Post" isEdit={false} isAdd={true}/>
      </div>
    );
};

export default AddPostForm;