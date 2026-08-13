import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import Icon from "./components/icon";

function App() {
	return (
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
		</div>
	);
}

export default App;
