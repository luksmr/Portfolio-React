import profileLuk from "../assets/profileLuk.jpg";
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import jsss from "../assets/jsss.png"
import reacct from "../assets/reacct.png"
import MYSQL from "../assets/MYSQL.png"
import cee from "../assets/cee.png"
import "../css/Main.css"
import 'animate.css';

const Main = () => {
  const Datos = {
    nombre: "ROMERO LUCAS MATIAS",
    edad: 23,
    carrera: "Programacion",
    institucion: "Universidad Tecnologica de Tucuman",
    skills: ["HTML", "CSS", "JavaScript", "React", "MySql", "C#"]
  };



  return (
    <>
      <br />
      <br />
      <br />
      <div className="animate__animated animate__backInDown animate__delay-1s ">
        <h1 className="h1title">{Datos.nombre}</h1>
      </div>
      <div className="animate__animated animate__backInDown animate__delay-1s">
        <div className="img">
          <img src={profileLuk} alt="" style={{ borderRadius: '50%' }} className="profile-image" />
        </div>
      </div>
      <br />
      <br />
      <div className="animate__animated animate__backInDown animate__delay-2s">
        <div className="text-center" >
          <div className="descr-Main"  >
            <p>
              Bienvenidos a mi portafolio, soy estudiante de la carrera de {Datos.carrera} en la {Datos.institucion}.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="animate__animated animate__backInDown animate__delay-4s">
        <h4 className="h4Main">Skills:</h4>
      </div>
      <br />
      <br />
      <div className="card-container">
        <div className="animate__animated animate__fadeInDown animate__delay-5s">
          <div className="card-row1">
            <div className="card1" style={{ width: '18rem' }}>
              <img src={HTML} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[0]}</p>
              </div>
            </div>
            <div className="card2" style={{ width: '18rem' }}>
              <img src={CSS} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[1]}</p>
              </div>
            </div>
            <div className="card3" style={{ width: '18rem' }}>
              <img src={jsss} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[2]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeInDown animate__delay-5s">
          <div className="card-row2">
            <div className="card4" style={{ width: '18rem' }}>
              <img src={reacct} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[3]}</p>
              </div>
            </div>
            <div className="card5" style={{ width: '18rem' }}>
              <img src={MYSQL} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[4]}</p>
              </div>
            </div>
            <div className="card6" style={{ width: '18rem' }}>
              <img src={cee} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{Datos.skills[5]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
