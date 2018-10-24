import React from 'react';
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/wedding.css";
import { SocialIcon } from "react-social-icons";



class HomeWedding extends React.Component {
  render () {
    return (
        <div className="wedding">

            <Link className="planwedding" to="/login">Plan a Party</Link>
            <center><h1 className="boda">Let's plan your wedding!</h1></center>
            <h3 className="text">Find the most rated place to buy your party needs:</h3>
              <Main />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h3 className="textw3">Need a service? <br />
              post it here to start<br />
              getting responces from other people</h3>
            <Forum />
              <div className ="leftSideBar">
              <ul>
              <li>
                <SocialIcon
                  network="twitter"
                  color="#00aced"
                  url="https://twitter.com/?lang=en"
                /></li>
                <li>
                <SocialIcon
                  network="facebook"
                  color="#3b5998"
                  url="https://www.facebook.com/code.dreamteam.5"
                /></li>
                <li>
                <a href="mailto:dreamteam2018hc@gmail.com"> <SocialIcon
                 network="google"
                 color="#bc2a8d"

               /></a></li>
               </ul>
               </div>
               <h3 className="text">Dont forget to rate this page!!!</h3>
               <Stars />
        </div>

    )
  }
}
export default HomeWedding;
