import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import Skeleton from "./skeleton";

const checkboxWrapperVariants = cva(
	"inline-flex items-center justify-center group relative",
);

const checkboxVariants = cva(
	`appearance-none peer flex items-center justify-center transition overflow-hidden `,
	{
		variants: {
			variant: {
				none: "",
				default: `border-green-base hover:border-green-dark hover:bg-green-dark/20
  								checked:border-green-base checked:bg-green-base cursor-pointer
  								group-hover:checked:border-green-dark group-hover:checked:bg-green-dark border-2 border-solid`,
			},
			size: {
				md: "w-5 h-5 rounded-sm",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
			disabled: false,
		},
	},
);

const checkBoxIconVariants = cva(
	`absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white`,
	{
		variants: {
			size: {
				md: "w-3 h-3",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

interface CheckboxInputProps
	extends
		Omit<React.ComponentProps<"input">, "disabled" | "size">,
		VariantProps<typeof checkboxVariants> {
	loading?: boolean;
}

function CheckboxInput({
	className,
	variant,
	size,
	disabled,
	loading = false,
	...props
}: CheckboxInputProps) {
	if (loading)
		return (
			<Skeleton
				rounded={"sm"}
				className={checkboxVariants({ variant: "none", size })}
			/>
		);

	return (
		<label className={checkboxWrapperVariants({ className })}>
			<input
				type="checkbox"
				className={checkboxVariants({ variant, size, disabled, className })}
				{...props}
			/>
			<Icon className={checkBoxIconVariants({ size })} svg={CheckIcon} />
		</label>
	);
}

export default CheckboxInput;
