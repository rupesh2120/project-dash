export const addList = (title) => (dispatch) => {
	dispatch({
		type: "ADD_LIST",
		title: title,
	});
};

export const addCard = (title, head, text) => (dispatch) => {
	dispatch({
		type: "ADD_CARD",
		title: title,
		head: head,
		text: text,
	});
};
export const deleteList = (title) => (dispatch) => {
	dispatch({
		type: "DELETE_LIST",
		title: title,
	});
};

export const deleteCard = (title, head) => (dispatch) => {
	dispatch({
		type: "DELETE_CARD",
		title: title,
		head: head,
	});
};
