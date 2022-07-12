import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../redux/postsReducer'
import { editPost } from '../../redux/postsReducer';
import PostForm from '../features/PostForm';
import { getLoggedUser } from '../../redux/usersReducer';
import { getLoggedUserByPostId } from '../../redux/usersReducer';
import NotFound from '../pages/NotFound';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const userLogged = useSelector(state => getLoggedUser(state));
  const userLoggedByPostId = useSelector(state => getLoggedUserByPostId(state, 'user-' + id));

  const handleSubmit = post => {
    dispatch(editPost({...post, id}));
    navigate("/");
  };

  if (!userLogged || !userLoggedByPostId ) return <NotFound />;
  else
    return (
      <div>
        <h3>Edit Post</h3>
        <PostForm action={handleSubmit} actionText="Edit Post" 
            title={postData.title} 
            description={postData.description} 
            publishedDate={postData.actualizationDate} 
            image={postData.image} 
            price={postData.price} 
            location={postData.location} 
            user={postData.user} />
      </div>
    );
};

export default EditPostForm;

