import React from "react";

export const ShowList = ({ lists }) => {
	return (
		<div>
			{lists.map((list) => (
				<h1>list.title</h1>
			))}
		</div>
	);
};
