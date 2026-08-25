export const TASKS_KEY = "tasks";

export type TaskState = "creating" | "created";

export interface Task {
	id: string;
	title: string;
	completed: boolean;
	state: TaskState;
}
