import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../redux/postsReducer'
import { editPost } from '../../redux/postsReducer';
import PostForm from '../features/PostForm';
import { getLoggedUser } from '../../redux/usersReducer';
import { getLoggedUserByPostId } from '../../redux/usersReducer';
import NotFound from '../pages/NotFound';
import { useEffect } from 'react';
import { fetchGetPostById } from '../../redux/postsReducer';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const postData = useSelector(state => getPostById(state.posts, id));
  const userLogged = useSelector(state => getLoggedUser(state));
  
 
  
  useEffect(() => {
    dispatch(fetchGetPostById(id));
  }, [dispatch, id]);


  const handleSubmit = (post) => {
    navigate("/");
  };

  if (!userLogged  ) return <NotFound />;
  else
    return (
      <div>
        <h3>Edit Post</h3>
        <PostForm action={handleSubmit} actionText="Edit Post" isEdit = {true} isAdd={false}
            title={postData.title} 
            description={postData.description} 
            publishedDate={postData.publishedDate} 
            image={postData.image} 
            price={postData.price} 
            location={postData.location} 
            user={postData.user} />
      </div>
    );
};

export default EditPostForm;

