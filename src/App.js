import { React, useState } from 'react';
import './App.scss';
import Tasks from './components/Tasks';
import Todos from './components/Todos';
import remote from './services/remote';
import remoteTask from './services/remoteTask';

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

	once(() => {
		remote.fetchTodos(extendedContext);
		remoteTask.fetchTasks(extendedContext);
	});

	return (
		<div className="App">
			<Todos { ...extendedContext }/>
			<Tasks { ...extendedContext }/>
		</div>
	);
};

export default App;
