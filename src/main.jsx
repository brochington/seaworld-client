import React from "react";
import Router from "react-router";
import Site from "./Site/index.jsx";
import routes from "./routes/index.jsx";

Router.run(routes, Handler => {
	const page = (
		<Site>
			<Handler />
		</Site>
	);

	return React.render(page, document.getElementById("app"));
});