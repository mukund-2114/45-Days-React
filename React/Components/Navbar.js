import {Link} from 'react-router-dom';
function Navbar(props) {
    return (
      <div className='bg-dark text-white'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>



          {/* {props.login === "yes" ?<li className="nav-item">
            <Link className="nav-link" to="/contact">Mukund</Link>
          </li> : <li className="nav-item">
            <Link className="nav-link" to="/contact">Login</Link>
          </li> } */}

          <li className="nav-item">
            <Link className="nav-link" to="/contact">

              {props.login=="yes" ? "Logout" : "Login" }
            </Link>
          </li> 
          
          
        

          
        </ul>
       
      </div>
    </nav>
          </div>
    );
  }
  
  export default Navbar;