import React from "react";

import Card from "../components/card";
import CheckboxInput from "../components/checkbox-input";
import ButtonIcon from "../components/button-icon";
import Text from "../components/text";

import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import xIcon from "../assets/icons/x.svg?react";

import TextInput from "../components/text-input";

function TaskItem() {
	const [isEditing, setisEditing] = React.useState(false);

	function handleEditTask() {
		setisEditing(true);
	}

	function handleExitEditTask() {
		setisEditing(false);
	}

	return (
		<Card size={"md"} className="flex items-center gap-3">
			{isEditing ? (
				<>
					<TextInput
						className="flex-1"
						value={"🛒 Fazer compras da semana"}
					></TextInput>
					<div className="flex gap-1">
						<ButtonIcon variant={"secondary"} icon={xIcon} />
						<ButtonIcon icon={CheckIcon} onClick={handleExitEditTask} />
					</div>
				</>
			) : (
				<>
					<CheckboxInput />
					<Text className="flex-1">🛒 Fazer compras da semana</Text>
					<div className="flex gap-1">
						<ButtonIcon variant={"terciary"} icon={TrashIcon} />
						<ButtonIcon
							variant={"terciary"}
							icon={PencilIcon}
							onClick={handleEditTask}
						/>
					</div>
				</>
			)}
		</Card>
	);
}

export default TaskItem;
