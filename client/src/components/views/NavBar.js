import { Navbar, NavbarBrand, Container, Nav} from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLoggedUser } from "../../redux/usersReducer";

const NavBar = () => {
    const userLogged = useSelector(state => getLoggedUser(state));
   return (
       <Navbar bg="dark" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
           <Container>
               <NavbarBrand as={NavLink} to="/">Bulletin.app</NavbarBrand>
               <Nav>
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    {!userLogged &&
                     <Nav.Link href="https://google.com">Sign in</Nav.Link> 
                    }
                    {!userLogged && 
                     <Nav.Link href="#signup">Sign up</Nav.Link>
                    }
                    {userLogged && 
                      <Nav.Link href="#signout">Sign out</Nav.Link>
                    }
                </Nav>
           </Container>
       </Navbar> 
   )
}

export default NavBar;
