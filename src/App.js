import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import {WatchList} from "./pages/WatchList";
import {Navigation} from "./components/Navbar/Navigation" ;
import Characters from "./pages/Characters";
import SoloChar from "./components/SoloChars/SoloChar";



export default function App(props) {

        return (
            <Router>
                <Navigation/>
            <div className='container pt-4'>
               <Switch>
                   <Route path='/chars' exact {...props} component={Characters}/>
                   <Route path='/episodes' exact {...props} component={Episodes}/>
                   <Route path='/locations' exact {...props} component={Locations}/>

                   <Route path="/chars/:id" {...props} component={SoloChar}/>
               </Switch>
            </div>
            </Router>

        );
}





