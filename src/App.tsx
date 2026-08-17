import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import TextInput from "./components/text-input";
import CheckboxInput from "./components/checkbox-input";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

function App() {
	return (
		<Container>
			<div className="grid gap-3">
				<div className="flex flex-col gap-1">
					<Text variant={"body-md"}>Body Md</Text>
					<Text variant={"body-sm-bold"}>Body Sm Bold</Text>
					<Text variant={"body-md-bold"}>Body Md Bold</Text>
				</div>
				<div className="flex gap-1">
					<Icon svg={TrashIcon} />
					<Icon svg={CheckIcon} />
					<Icon svg={PlusIcon} />
					<Icon svg={SpinnerIcon} animate />
					<Icon svg={PencilIcon} />
				</div>
				<div className="flex gap-2">
					<Badge variant={"secondary"}>5</Badge>
					<Badge variant={"primary"}>2 de 5</Badge>
					<Badge loading></Badge>
				</div>
				<div className="flex gap-1">
					<Button icon={PlusIcon} disabled>
						Nova tarefa
					</Button>
				</div>
				<div className="flex gap-1">
					<ButtonIcon icon={PlusIcon}></ButtonIcon>
					<ButtonIcon variant={"secondary"} icon={PlusIcon}></ButtonIcon>
					<ButtonIcon variant={"terciary"} icon={PlusIcon}></ButtonIcon>
					<ButtonIcon icon={PlusIcon} loading></ButtonIcon>
				</div>
				<div className="flex gap-1">
					<TextInput></TextInput>
				</div>
				<div className="flex gap-1">
					<CheckboxInput></CheckboxInput>
					<CheckboxInput disabled></CheckboxInput>
					<CheckboxInput loading></CheckboxInput>
				</div>
				<div className="flex gap-1">
					<Card>Olá mundo</Card>
					<Card size="md">Olá mundo</Card>
				</div>
				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
}

export default App;
