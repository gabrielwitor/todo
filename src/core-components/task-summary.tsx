import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

function TasksSummary() {
	const { tasksCount, completedTasks, isLoadingTasks } = useTasks();

	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className="text-gray-300!">
					Tarefas criadas
				</Text>
				<Badge variant={"secondary"} loading={isLoadingTasks}>
					{tasksCount}
				</Badge>
			</div>

			<div className="flex items-center gap-2">
				<Text variant={"body-sm-bold"} className="text-gray-300!">
					Concluídas
				</Text>
				<Badge loading={isLoadingTasks}>
					{completedTasks} de {tasksCount}
				</Badge>
			</div>
		</>
	);
}

export default TasksSummary;
