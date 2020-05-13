import React from "react";
import "../assets/styles/componets/PageLogin.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authorize } from "../services/AuthToken";

const PageLogin = (props) => {
  const { sesion } = props.dataReducer;

  const login = () => {
    authorize();
  };

  return (
    <div className="pageLongin">
      <div className="pageLongin-ctn">
        <h1>Música para todos.</h1>
        <h4>Millones de canciones. No necesitas targeta de crédito.</h4>
        {sesion ? (
          <Link to="/webplayer" className="pageLogin-link">
            ABRIR REPRODUCTOR WEB
          </Link>
        ) : (
          <Link to="#" className="pageLogin-link" onClick={login}>
            OBTÉN SPOTIFY GRATIS
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataReducer: state.dataReducer,
});

export default connect(mapStateToProps, null)(PageLogin);
