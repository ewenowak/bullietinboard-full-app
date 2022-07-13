import { Card, Button, Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux"
import { getAllPosts } from "../../redux/postsReducer"
import { Link } from "react-router-dom";


const AllPosts = () => {
    const posts = useSelector(getAllPosts);
    const postsByDate = posts.sort(function (a, b) {
        return new Date(b.publishedDate) - new Date(a.publishedDate);
      });
    return (
        <>
        <Row xs={1} md={3} className="g-4">
            {postsByDate.map( post => 
            <Col key={post._id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text><b>Location:</b> {post.location}</Card.Text>
                        <Button as={Link} to={"/post/" + post.id} variant="outline-dark">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
        </> 
    );
};


export default AllPosts;