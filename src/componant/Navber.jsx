
import { Link } from "react-router-dom"

function Navber() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" >Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about" >About </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navber
