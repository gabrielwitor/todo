import Container from "../components/container";
import TaskItem from "../core-components/task-item";
import TasksSummary from "../core-components/task-summary";

function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex justify-between">
				<TasksSummary />
			</header>
			<Container as="section">
				<TaskItem />
			</Container>
		</Container>
	);
}

export default PageHome;
