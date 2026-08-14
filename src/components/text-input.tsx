import type React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./textVariants";

const textInputVariants = cva(
	"border-b border-solid border-gray-200 focus:border-pink-base outline-none",
	{
		variants: {
			size: {
				md: "pb-2 px-2",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			size: "md",
			disabled: false,
		},
	},
);

interface TextInputProps
	extends
		Omit<React.ComponentProps<"input">, "size" | "disabled">,
		VariantProps<typeof textInputVariants> {}

function TextInput({ size, disabled, className, ...props }: TextInputProps) {
	return (
		<input
			className={cx(
				textInputVariants({ size, disabled }),
				textVariants(),
				className,
			)}
			{...props}
			type="text"
		/>
	);
}

export default TextInput;
