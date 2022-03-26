const initialState = {
	lists: [],
};

let listReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_LIST":
			return {
				...state,
				lists: [action.title, ...state.posts],
			};
		case "ADD_CARD":
			return {
				...state,
				lists: state.lists.map((list) =>
					list.title === action.title
						? { ...list, head: action.head, text: action.text }
						: list
				),
			};
		case "DELETE_LIST":
			return {
				...state,
				lists: state.lists.filter((list) => list.title !== action.title),
			};
		case "DELETE_CARD":
			return {
				...state,
				lists: state.lists.filter(
					(list) => list.title !== action.title && list.head !== action.head
				),
			};
		default:
			return state;
	}
};
export default listReducer;
