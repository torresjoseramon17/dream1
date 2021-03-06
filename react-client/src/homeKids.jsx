import React from 'react';
import Stars from './components/starRating.js';
import Forum from "./components/Forum.js";
import Main from "./components/search.js";
import {Link} from 'react-router-dom';
import "../dist/kids.css";
import { SocialIcon } from "react-social-icons";

class HomeKids extends React.Component {
  render () {
    return (
        <div className="kids">

            <Link className="plankids" to="/login">Plan a Party</Link>
           <center><h1 className="homekids">**Kids Party**</h1></center>
           <center><h3 className="textk">Find the most rated place to buy your party needs:</h3></center>
             <Main />
             <br/>
             <br/>
             <h3 className="textk3">Need a service? <br />
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
              <h3 className="textk2">Dont forget to rate this page!!!</h3>
              <Stars />
        </div>

    )
  }
}
export default HomeKids;
