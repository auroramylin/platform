import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {routeMap} from "./routeMap";
import CourseResources from "./pages/CourseResources";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    { path: routeMap.homepage, element: <HomePage/>,},
    { path: routeMap.courseResources, element: <CourseResources/> },
    { path: routeMap.login, element: <LoginPage/> }
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
