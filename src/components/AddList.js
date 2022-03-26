import React, { useState } from "react";
import { connect } from "react-redux";
import { addList } from "../actionReducer/actions";

const AddList = (props) => {
	const [list, setList] = useState("");

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addList({ list });
					setList("");
				}}
			>
				<textarea
					name="text"
					cols="30"
					rows="5"
					placeholder="Add List"
					value={list}
					onChange={(e) => setList(e.target.value)}
					required
				/>
				<input type="submit" value="Add List" />
			</form>
			<br />
		</div>
	);
};

export default connect(null, { addList })(AddList);
