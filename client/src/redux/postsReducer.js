import shortid from 'shortid';
import axios from 'axios';

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({posts}, id) => posts.find(post => post.id === id);
export const getFilteredPosts = ({posts}, searchPhrase) => posts.filter(post => post.title.toLowerCase().includes(searchPhrase.toLowerCase()));

// thunk creators

export const fetchGetAllPosts = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};




// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

const FETCH_START = createActionName('FETCH_START');
const FETCH_POSTS_SUCCESS = createActionName('FETCH_POSTS_SUCCESS');
const FETCH_POST_SUCCESS = createActionName('FETCH_POST_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');


// actions creators
export const deletePost = payload => ({type: DELETE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchPostsSuccess = payload => ({payload, type: FETCH_POSTS_SUCCESS});
export const fetchPostSuccess = payload => ({payload, type: FETCH_POST_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case ADD_POST:
            return [...statePart, {...action.payload, id: shortid()}];
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload } : post ));
        case FETCH_START: {
          return {...statePart, loading: {active: true, error: false}};
        }
        case FETCH_POSTS_SUCCESS: {
          return {...statePart, loading: {active: false, error: false}, allPostsData: action.payload};
        }
        case FETCH_POST_SUCCESS: {
          return {...statePart, loading: {active: false, error: false}, postData: action.payload};
        }
        case FETCH_ERROR: {
          return {...statePart, loading: {active: false, error: action.payload}};
        }
        default:
         return statePart;
    };
};

export default postsReducer;