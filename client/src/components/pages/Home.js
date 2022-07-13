//import AllPosts from "../features/AllPosts";
import AllPosts from "../features/AllPosts";
import SearchForm from "../features/SearchForm";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/usersReducer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGetAllPosts } from "../../redux/postsReducer";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchGetAllPosts());
    }, [dispatch])

    const userLogged = useSelector(state => getLoggedUser(state));
    

    return (
        <>
        <SearchForm />
        <Row  xs={"auto"} className="justify-content-between mb-3">
                <Col as={"h2"}>All Posts</Col>
                {userLogged &&
                    <Col className="text-right"><Button as={Link} to={"/post/add"} variant="outline-success" >Add post</Button></Col>
                }
            </Row>
        <AllPosts />
        </>
    );
};

export default Home;