import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const containerVaraints = cva(`mx-auto`, {
	variants: {
		size: {
			md: "w-lg px-2",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface ContainerProps
	extends React.ComponentProps<"div">, VariantProps<typeof containerVaraints> {
	as?: keyof React.JSX.IntrinsicElements;
}

function Container({
	as = "div",
	size,
	className,
	children,
	...props
}: ContainerProps) {
	return React.createElement(
		as,
		{
			className: containerVaraints({ size, className }),
			...props,
		},
		children,
	);
}

export default Container;
