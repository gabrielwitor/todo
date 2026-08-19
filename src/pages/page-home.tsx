import Container from "../components/container";
import TasksSummary from "../core-components/task-summary";
import TasksList from "../core-components/tasks-list";

function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex justify-between">
				<TasksSummary />
			</header>
			<TasksList />
		</Container>
	);
}

export default PageHome;
