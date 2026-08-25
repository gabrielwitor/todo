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
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
	task: Task;
}

function TaskItem({ task }: TaskItemProps) {
	const { updateTask, updateTaskStatus, deleteTask } = useTask();

	const [isEditing, setisEditing] = React.useState(task.state === "creating");
	const [taskTitle, setTaskTitle] = React.useState(task.title || "");

	function handleEditTask() {
		setisEditing(true);
	}

	function handleExitEditTask() {
		if (task.state === "creating") deleteTask(task.id);

		setisEditing(false);
	}

	function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	function handleSubmitTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		updateTask(task.id, { title: taskTitle });
		setisEditing(false);
	}

	function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;
		updateTaskStatus(task.id, checked);
	}

	function handleDeleteTask() {
		deleteTask(task.id);
	}

	return (
		<Card size={"md"}>
			{isEditing ? (
				<form onSubmit={handleSubmitTask} className="flex items-center gap-3">
					<TextInput
						className="flex-1"
						onChange={handleChangeTaskTitle}
						required
						autoFocus
						value={taskTitle}
					></TextInput>
					<div className="flex gap-1">
						<ButtonIcon
							variant={"secondary"}
							icon={xIcon}
							onClick={handleExitEditTask}
							type="button"
						/>
						<ButtonIcon icon={CheckIcon} type="submit" />
					</div>
				</form>
			) : (
				<div className="flex items-center gap-3">
					<CheckboxInput
						checked={task.completed}
						onChange={handleUpdateTaskStatus}
					/>
					<Text
						className={cx("flex-1", {
							"line-through": task.completed,
						})}
					>
						{taskTitle}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon
							variant={"terciary"}
							icon={TrashIcon}
							onClick={handleDeleteTask}
						/>
						<ButtonIcon
							variant={"terciary"}
							icon={PencilIcon}
							onClick={handleEditTask}
						/>
					</div>
				</div>
			)}
		</Card>
	);
}

export default TaskItem;
