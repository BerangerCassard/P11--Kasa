
import './App.css';
import Header from "./components/header.jsx";
import './styles/app.css'
import Homepage from './components/home-page.jsx'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AccommodationPage from "./components/accommodation-page.jsx";
import AboutPage from './components/about-page.jsx'
import ErrorPage from "./components/error-page.jsx";
import Footer from './components/footer.jsx'
import React from "react";

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/accommodation/:id' component={AccommodationPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/*' component={ErrorPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
