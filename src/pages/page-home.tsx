import Container from "../components/container";
import TasksSummary from "../core-components/task-summary";

function PageHome() {
	return (
		<Container as="article">
			<header className="flex justify-center">
				<TasksSummary />
			</header>
		</Container>
	);
}

export default PageHome;
