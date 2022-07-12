//selectors
export const getLoggedUser = ({ users }) => users.find(user => user.logged === true);
export const getLoggedUserByPostId = ({ users }, postId) => users.find(user => user.logged === true && user.id === postId)
export const getUserByPostId = ( {users}, postId) => users.find(user => user.id === postId);
export const getAdminLogged = ({ users }) => users.find(user => user.logged === true && user.role === 'admin');
  
// actions
const createActionName = actionName => `app/user/${actionName}`;
const EDIT_USER = createActionName('EDIT_USER');

// action creators
export const editUser = payload => ({type: EDIT_USER, payload});

const userReducer = (statePart = [], action) => {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...statePart,
                user: {...statePart.user, logged: action.payload},
            };
        default:
            return statePart;
    }
};
  
export default userReducer;