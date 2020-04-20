import React,{ useState } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import GoogleLogin from "react-google-login";
import {GooglePicker, MyCustomButton} from "react-google-picker";
const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
  
    const responseGoogle = response => {
      setName(response.profileObj.name);
      // setEmail(response.profileObj.email);
      setUrl(response.profileObj.imageUrl);
    };
    function upd(){
        window.location.reload();
    }
            
    return (
        <div className={`main-nav main-nav--${context}` }onClick={upd}>            
            {/* <NavLink className={getClassName("/about")} exact to="/about">About</NavLink>                         */}
            <NavLink className={getClassName("/makeYourOwn")} exact to="/makeYourOwn">Make your own</NavLink>            
            <NavLink className={getClassName("/Predefine")} exact to="/predefine">Predefine</NavLink>            
            <NavLink className={getClassName("/Login")} exact to="/Login">
                <GoogleLogin
                // className="dark"
                clientId="948125826703-isqukqa2t6vtfob94invt8h8b0ld9hoj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}/>
            </NavLink>
            <NavLink>{name}</NavLink>            
        </div>

        

    );
};

export default withRouter(Nav);