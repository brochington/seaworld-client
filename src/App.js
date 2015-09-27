import React from "react";
import Site from "./Site";
import {seaworldActions} from "./actions";

console.log("seaworldActions", seaworldActions);

class App extends React.Component {
	async componentDidMount() {
		await seaworldActions.something();
	}

	render() {
		return (
			<div>
				<Site />
			</div>
		)
	}
}

export default App;