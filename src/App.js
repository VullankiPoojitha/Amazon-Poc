import logo from './logo.svg';
import './App.css';
import Sample from './sample';
import BasicOfReactQuery from './ExampleOfReactQuery/basicsOfReactQuery';
import ExampleOnEnabled from './ExampleOfReactQuery/ExampleOnEnabled';
import ExampleAPI from './ExampleOfReactQuery/ExampleAPI';
import AuthDetails from './components/auth/AuthDetails';
import SignInFunction from './components/auth/SignInFunction';
import SignUpFunction from './components/auth/SignUpFunction';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/amazon/homePage';
import GetLocation from './components/amazon/getLocation';
import JeweleryPage from './components/amazon/jeweleryPage';
import MenPage from './components/amazon/menPage';
import ElectronicPage from './components/amazon/electronicPage';
import WomenPage from './components/amazon/womenPage';
import Header from './components/amazon/header';

function App() {
  return (
    <div style={{ background: '#E3E6E6' }}>
      {/* <div className="text-3xl font-bold underline">hello</div> */}
      {/* <ExampleAPI /> */}
      {/* <Sample /> */}

      {/* <BasicOfReactQuery /> */}
      {/* <ExampleOnEnabled /> */}
      {/* <SignInFunction /> */}
      {/* <SignUpFunction /> */}
      <div>
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">SignIn</Link>
                </li>
                <li>
                  <Link to="/SignIn">SignUp</Link>
                </li>
                <li>
                  <Link to='/home'></Link>
                </li>
              </ul>
            </nav> */}

            {/* 👇️ Wrap your Route components in a Routes component */}
            <Header />
            <Routes>
              <Route path="/" element={<SignUpFunction />} />
              <Route path="/SignIn" element={<SignInFunction />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/jeweleryPage' element={<JeweleryPage />} />
              <Route path='/menPage' element={<MenPage />} />
              <Route path='/electronicPage' element={<ElectronicPage />} />
              <Route path='/womenPagePage' element={<WomenPage />} />

              {/* <Route path='/loaction' element={<GetLocation />} /> */}
            </Routes>
          </div>
        </Router>
      </div>
      {/* <AuthDetails /> */}
    </div>
  );
}

export default App;
