import { peek } from '@laufire/utils/debug';
import { React, useState } from 'react';
import './App.scss';
import Tasks from './components/Tasks';
import Todos from './components/Todos';
import TaskManager from './services/TaskManager';

const todoState = {
	initialValue: '',
	todos: [],
	editedTodo: null,
	filter: 'all',
	tasks: [],
};

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(todoState);
	const extendedContext = { ...context, state, setState };

	peek(extendedContext);
	once(() => TaskManager.autoTaskGenerator(extendedContext));

	return (
		<div className="App">
			<Todos { ...extendedContext }/>
			<Tasks { ...extendedContext }/>
		</div>
	);
};

export default App;
