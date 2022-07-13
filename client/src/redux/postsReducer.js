import shortid from 'shortid';
import axios from 'axios';

/* SELECTORS */
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({posts}, id) => posts;
export const getFilteredPosts = ({posts}, searchPhrase) => posts.filter(post => post.title.toLowerCase().includes(searchPhrase.toLowerCase()));


/* THUNKS */

export const fetchGetAllPosts = () => {
    return (dispatch, getState) => {
      dispatch(fetchStarted());
      axios
        .get('http://localhost:8000/api/posts')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    };
  };

  export const fetchGetPostById = (id) => {
    return (dispatch, getState) => {
      dispatch(fetchStarted());
      axios
        .get(`http://localhost:8000/api/posts/${id}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    };
  };

  export const fetchAddPost = post => {
    return (dispatch, getState) => {
      dispatch(fetchStarted());
      axios
        .post('http://localhost:8000/api/posts', post)
        .then(res => {
          dispatch(addPost(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    };
  };
  



/* ACTIONS */
// action name creator
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');



// actions creators
export const deletePost = payload => ({type: DELETE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });



const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case FETCH_START: {
            return {...statePart, loading: {active: true, error: false}};
          }
        case FETCH_SUCCESS: {
            return {...statePart, loading: {active: false, error: false}, posts: action.payload}
        }
        case FETCH_ERROR: {
            return {...statePart, loading: {active: false, error: action.payload}};
        }
        case DELETE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case ADD_POST:
            return [...statePart, {...action.payload, id: shortid()}];
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload } : post ));
        default:
         return statePart;
    };
};

export default postsReducer;