import React from "react";
import AddList from "./components/AddList";

import { connect } from "react-redux";
import { ShowList } from "./components/ShowList";

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			<AddList />
			<ShowList lists={this.props.lists} />
		</div>
	);
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(App);
