import "../css/Header.css"

const Header = () => {
  return (

    <div className="navbar">
      <div className="logo">
        <h1>LR</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
              <a className="nav-link" href="#">
                Sobre Mi
              </a>
              <a className="nav-link" href="https://wa.me/+5493814799113" target="_blank" rel="noopener noreferrer">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
