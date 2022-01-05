
import './App.css';
import Header from "./components/header.jsx";
import './styles/app.css'
import Homepage from './components/home-page'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' component={Homepage} />
          </Routes>
          <Homepage/>

      </BrowserRouter>

  );
}

export default App;
