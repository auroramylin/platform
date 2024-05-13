import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {routeMap} from "./routeMap";
import CourseResources from "./pages/CourseResources";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PersonalInformation from "./pages/PersonalInformation";
import ContactUsPage from "./pages/ContactUsPage";

const router = createBrowserRouter([
    { path: routeMap.homepage, element: <HomePage/>,},
    { path: routeMap.courseResources, element: <CourseResources/> },
    { path: routeMap.login, element: <LoginPage/> },
    { path: routeMap.register, element: <RegisterPage/> },
    { path: routeMap.personalInfo, element: <PersonalInformation/> },
    { path: routeMap.contactUs, element: <ContactUsPage /> }
]);

function App() {
    return (<React.Fragment>
        <CssBaseline/>
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    </React.Fragment>);
}

export default App;
