import { Card, ListGroup, Image, Button } from "react-bootstrap";
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getPostById } from "../../redux/postsReducer";
import { deletePost } from "../../redux/postsReducer";
import { getLoggedUser,  getAdminLogged} from "../../redux/usersReducer";
import dateToStr from "../../utils/dateToStr";


const Post = () => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    const userLoggedData = useSelector(state => getLoggedUser(state));
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
                <ListGroup.Item><b>Location:</b> { postData.location }</ListGroup.Item>
                <ListGroup.Item><b>Price:</b> { postData.price } $</ListGroup.Item>
                <ListGroup.Item><b>Published Date:</b> { dateToStr(postData.publishedDate) } </ListGroup.Item>
                {postData.actualizationDate &&
                    <ListGroup.Item><b>Actualization Date:</b> { dateToStr(postData.actualizationDate) } </ListGroup.Item>
                }
                {userLoggedData &&
                    <ListGroup.Item><b>Seller:</b>
                        <Card border="light" className="text-center" style={{ width: '40rem' }}>
                            <Image roundedCircle variant="top" style={{ width: '10rem', height: '10rem'}} src={userLoggedData.avatar} />
                            <Card.Body>
                                <Card.Title>{userLoggedData.login }</Card.Title>
                                <Card.Text>{ userLoggedData.phone }</Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
            </ListGroup>
        <Card.Body>
        {(userLoggedData.id === postData.user  || userAdmin) &&
            <Button as={Link} to={"/post/edit/" + postData.id}  variant="success">Edit</Button>
        }
        {(userLoggedData.id === postData.user || userAdmin) &&
            <Button variant="danger" onClick={deletedPost}>Delete</Button>
        }
        </Card.Body>
    </Card>
    );
};


export default Post;