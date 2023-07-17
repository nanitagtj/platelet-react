import { Link } from "react-router-dom";
// import Modal from "../ui/Modal";
import classes from "./Layout.css";
import Navigation from "./Navigation";

const Layout = (props) => {
  const today = new Date();
  return (
    <>
      {/* <Modal/> */}
      <header className={classes.header}>
        <div className="BackgroundContainerHeader">
          <div className="ContainerHeader">
            <img src={restauranteIcono} alt="Restaurante Icono" className="RestauranteIcono" />
            <div className="TitleContainer">
              <span className="Nanita">Nanita</span>
              <span className="Plaza">Plaza</span>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>Ningún derecho reservado {today.getFullYear()}</footer>
    </>
  );
};

export default Layout;