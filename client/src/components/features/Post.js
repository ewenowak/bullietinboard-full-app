import { Card, ListGroup, Image, Button } from "react-bootstrap";
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getPostById } from "../../redux/postsReducer";
import { deletePost } from "../../redux/postsReducer";
import { getLoggedUser,  getAdminLogged, getUserByPost} from "../../redux/usersReducer";
import dateToStr from "../../utils/dateToStr";


const Post = () => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    const userLogged = useSelector(state => getLoggedUser(state));
    const userData = useSelector(state => getUserByPost(state, postData.user));
    const userAdmin = useSelector(state => getAdminLogged(state))
  

    const dispatch = useDispatch();

    const deletedPost = () => {
        dispatch(deletePost(postData.id))
    };
    

    if(!postData) return <Navigate to="/" />
    return (
        <Card className="text-center"  style={{ width: '40rem' }}>
            <Card.Img variant="top" src={postData.image} />
            <Card.Body>
                <Card.Title>{ postData.title }</Card.Title>
                <Card.Text>{ postData.description }</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><b>BLocation:</b> { postData.location }</ListGroup.Item>
                <ListGroup.Item><b>Price:</b> { postData.price } $</ListGroup.Item>
                <ListGroup.Item><b>Published Date:</b> { dateToStr(postData.publishedDate) } </ListGroup.Item>
                {postData.actualizationDate &&
                    <ListGroup.Item><b>Actualization Date:</b> { dateToStr(postData.actualizationDate) } </ListGroup.Item>
                }
                {userData &&
                    <ListGroup.Item><b>Seller:</b>
                        <Card border="light" className="text-center" style={{ width: '40rem' }}>
                            <Image roundedCircle variant="top" style={{ width: '10rem', height: '10rem'}} src={userData.avatar} />
                            <Card.Body>
                                <Card.Title>{userData.login }</Card.Title>
                                <Card.Text>{ userData.phone }</Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
            </ListGroup>
        <Card.Body>
        {(userLogged && userLogged.id === postData.user  || userAdmin) &&
            <Button as={Link} to={"/post/edit/" + postData.id}  variant="success">Edit</Button>
        }
        {(userLogged && userLogged.id === postData.user || userAdmin) &&
            <Button variant="danger" onClick={deletedPost}>Delete</Button>
        }
        </Card.Body>
    </Card>
    );
};


export default Post;