//import AllPosts from "../features/AllPosts";
import AllPosts from "../features/AllPosts";
import SearchForm from "../features/SearchForm";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/usersReducer";
import { Link } from "react-router-dom";

const Home = () => {
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