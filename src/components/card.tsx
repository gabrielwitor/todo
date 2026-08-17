import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const cardVariants = cva(
	"rounded-lg border boder-solid border-gray-200 bg-white shadow-sm",
	{
		variants: {
			size: {
				none: "",
				md: "p-5",
			},
		},
		defaultVariants: {
			size: "none",
		},
	},
);

interface CardProps
	extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
	as?: keyof React.JSX.IntrinsicElements;
}

function Card({ as = "div", className, children, size, ...props }: CardProps) {
	return React.createElement(
		as,
		{
			className: cardVariants({ size, className }),
			...props,
		},
		children,
	);
}

export default Card;
