import { Box } from '@mui/material';
import { React } from 'react';
import ActionButton from '../Buttons/ActionButton';
import ClearCompleted from '../Buttons/ClearCompleted';
import Input from './Input';
import Lists from './Lists';
import SelectAll from './SelectAll';
import TaskPane from './TaskPane';

const Todos = (context) =>
	<Box className="todoBox">
		<label className="header">Todo</label>
		<Box>
			<Input { ...context }/>
			<ActionButton { ...context }/>
			<TaskPane { ...context }/>
			<SelectAll { ...context }/>
			<Lists { ...context }/>
			<ClearCompleted { ...context }/>
		</Box>
	</Box>;

export default Todos;