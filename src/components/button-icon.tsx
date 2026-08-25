import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";
import Skeleton from "./skeleton";
import Spinner from "../assets/icons/spinner.svg?react";

const buttonIconVariants = cva(
	"inline-flex items-center justify-center cursor-pointer transition group",
	{
		variants: {
			variant: {
				none: "",
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
			handling: {
				true: "pointer-events-none",
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
			none: "",
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
	loading?: boolean;
	icon: React.ComponentProps<typeof Icon>["svg"];
}

function ButtonIcon({
	icon,
	variant,
	size,
	disabled,
	className,
	loading = false,
	handling,
	...props
}: ButtonIconProps) {
	if (loading)
		return (
			<Skeleton
				className={buttonIconVariants({ variant: "none", disabled: false, size })}
			/>
		);
	return (
		<button
			className={buttonIconVariants({ variant, size, disabled, className })}
			{...props}
		>
			<Icon
				className={buttonIconIconVariants({ variant, disabled, size })}
				svg={handling ? Spinner : icon}
				animate={handling}
			></Icon>
		</button>
	);
}

export default ButtonIcon;
