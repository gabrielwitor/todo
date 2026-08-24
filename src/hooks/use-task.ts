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

	return {
		prepareTask,
	};
}
