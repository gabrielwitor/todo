import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

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

	function updateTask(id: string, payload: { title: Task["title"] }) {
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

	function deleteTask(id: string) {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	return {
		prepareTask,
		updateTask,
		updateTaskStatus,
		deleteTask,
	};
}
