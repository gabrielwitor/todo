import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	return {
		tasks,
		tasksCount: tasks.filter((task) => task.state === "created").length,
		completedTasks: tasks.filter((task) => task.completed).length,
	};
}
