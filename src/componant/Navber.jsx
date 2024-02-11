
import { Link } from "react-router-dom"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function Navber() {
    return (

        <>

{/* 
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link  href="/about">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
 */}


            <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark">
                <a className="navbar-brand  text-light" >Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link  text-light" to="/" >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-light" to="/about" >About </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" >Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-light" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navber
