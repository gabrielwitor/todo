import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
	const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [tasks, setTasks] = React.useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

	async function fetchTasks() {
		if (isLoadingTasks) {
			await delay(2000);
			setIsLoadingTasks(false);
		}

		setTasks(tasksData);
	}

	React.useEffect(() => {
		fetchTasks();
	}, [tasksData]);

	return {
		tasks: tasks,
		tasksCount: tasks.filter((task) => task.state === "created").length,
		completedTasks: tasks.filter((task) => task.completed).length,
		isLoadingTasks,
	};
}
