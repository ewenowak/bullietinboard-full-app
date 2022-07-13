import { Card, Button, Row, Col} from "react-bootstrap";

import { getAllPosts } from "../../redux/postsReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchGetAllPosts } from "../../redux/postsReducer";

const AllPosts = () => {
    const posts = useSelector(state => getAllPosts(state.posts));
    console.log('posts', posts)
    return (
        <>
        <Row xs={1} md={3} className="g-4">
            {posts.map( post => 
            <Col key={post._id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={post.image} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text><b>Location:</b> {post.location}</Card.Text>
                        <Button as={Link} to={"/post/" + post._id} variant="outline-dark">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
        </> 
    );
};


export default AllPosts;
