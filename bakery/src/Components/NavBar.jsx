import "../CSS/Navbar.css"


function NavBar() {
    return (
      <>
      <nav>
        <div className="navbar-logo">
            <p>Logo</p>
        </div>
        <div className="navlinks">
            <a href="https://github.com/LSkhosana/Bakery/settings">Home</a>
            <a href="https://github.com/LSkhosana/Bakery/settings">About</a>
            <a href="https://github.com/LSkhosana/Bakery/settings">Recipes</a>
            <a href="https://github.com/LSkhosana/Bakery/settings">Contact</a>
        </div>

      </nav>
        </>
    );
  }
  
  export default NavBar;