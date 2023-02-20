import { peek } from '@laufire/utils/debug';
import { Box } from '@mui/material';
import { React } from 'react';

const Text = (context) => {
	const { state, setState, data: todo } = context;

	return (
		<Box
			onClick={ () => setState({
				...state,
				initialValue: todo.text,
				editedTodo: peek(todo),
			}) }
		>
			{todo.text}
		</Box>);
};

export default Text;