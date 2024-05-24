import "../css/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-3 mx-5">
              <p className="h4 mb-3">Contact me</p>
              <p className="icon-container">
                <a href="https://www.facebook.com/lucasmatias.romero.5" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook icon"></i>
                </a>
                <a href="https://wa.me/+5493814799113" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp icon"></i>
                </a>
                <a href="mailto:lucasmatiasr17@gmail.com">
                  <i className="bi bi-envelope icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/lucas-romero-3a214b251/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin icon"></i>
                </a>
              </p>
            </div>
            
            <div className="col-xs-12 col-md-6 col-lg-3 mx-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40282.786313169105!2d-65.22595230947157!3d-26.823124453021602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c23b7b6e863%3A0x976c9adc5013942c!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20-%20Facultad%20Regional%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1716431331806!5m2!1ses!2sar" width="100%" height="100" style={{ border: '0' }} allowfullscreen="" loading="lazy" ></iframe>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3 mx-5">
              <div className="copy">
              <p className="h6">2024 Romero Lucas Matias, alumno UTN-FRT. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer