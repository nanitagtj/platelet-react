import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove_usuario } from "../../store/actions";
import classes from "./Navigation.css";

const Navigation = () => {
const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(remove_usuario());
  }
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  let content = (
    <ul>
      <li>
        <NavLink activeClassName={classes.active} to="/registrar" exact>
          Registrar
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/ingresar" exact>
          Ingresar
        </NavLink>
      </li>
    </ul>
  );
  if (token !== "") {
    content = (
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/inicio" exact>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/pagar" exact>
            Pago
          </NavLink>
        </li>
        <li>
          <span className={classes.usuario}>{user.nombres}:</span>{" "}
          <button onClick={logoutClickHandler}>salir</button>{" "}
        </li>
      </ul>
    );
  }
  return <nav className={classes.nav}>{content}</nav>;
};

export default Navigation;
