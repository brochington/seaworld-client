import React from "react";
import {Route} from 'react-router';
import Home from "../pages/Home/index.jsx";
import Test from "../pages/Test/index.jsx";


const routes = (
	<Route name="app" path="/" handler={Home} >
		<Route name="test" handler={Test} />
	</Route>
);

export default routes;