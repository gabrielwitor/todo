import Button from "../components/button";

import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import type { Task } from "../models/task";

function TasksList() {
	const { tasks, isLoadingTasks } = useTasks();
	const { prepareTask } = useTask();

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					className="w-full"
					icon={PlusIcon}
					onClick={handleNewTask}
					disabled={
						tasks.some((task) => task.state === "creating") || isLoadingTasks
					}
				>
					Nova tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{isLoadingTasks ? (
					<>
						<TaskItem loading task={{} as Task} />
						<TaskItem loading task={{} as Task} />
						<TaskItem loading task={{} as Task} />
					</>
				) : (
					tasks.map((task) => <TaskItem key={task.id} task={task} />)
				)}
			</section>
		</>
	);
}

export default TasksList;
