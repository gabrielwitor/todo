import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
	const [isDeletingTask, setIsDeletingTask] = React.useState(false);

	function prepareTask() {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(36).slice(2, 9),
				title: "",
				completed: false,
				state: "creating",
			},
		]);
	}

	async function updateTask(id: string, payload: { title: Task["title"] }) {
		setIsUpdatingTask(true);
		await delay(100);
		setIsUpdatingTask(false);

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, state: "created", ...payload } : task,
			),
		);
	}

	function updateTaskStatus(id: string, completed: boolean) {
		setTasks(
			tasks.map((task) => (task.id === id ? { ...task, completed } : task)),
		);
	}

	async function deleteTask(id: string) {
		setIsDeletingTask(false);
		await delay(100);
		setIsDeletingTask(false);

		setTasks(tasks.filter((task) => task.id !== id));
	}

	return {
		prepareTask,
		updateTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	};
}
