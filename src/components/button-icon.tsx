import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";

const buttonIconVariants = cva(
	"inline-flex items-center justify-center cursor-pointer transition group",
	{
		variants: {
			variant: {
				primary: "bg-green-base hover:bg-green-dark",
				secondary: "bg-pink-light hover:bg-pink-dark",
				terciary: "bg-transparent hover:bg-gray-200",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
				false: "",
			},
			size: {
				sm: "w-6 h-6 p-1 rounded",
			},
		},
		defaultVariants: {
			variant: "primary",
			disabled: false,
			size: "sm",
		},
	},
);

const buttonIconIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-white",
			secondary: "fill-pink-base group-hover:fill-white",
			terciary: "fill-gray-300 group-hover:fill-gray-400",
		},
		disabled: {
			true: "opacity-50",
			false: "",
		},
		size: {
			sm: "h-4 w-4",
		},
	},
	defaultVariants: {
		variant: "primary",
		disabled: false,
		size: "sm",
	},
});

interface ButtonIconProps
	extends
		Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonIconVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

function ButtonIcon({
	icon,
	variant,
	size,
	disabled,
	className,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonIconVariants({ variant, size, disabled, className })}
			{...props}
		>
			<Icon
				className={buttonIconIconVariants({ variant, disabled, size })}
				svg={icon}
			></Icon>
		</button>
	);
}

export default ButtonIcon;
