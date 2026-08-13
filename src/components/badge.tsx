import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Text from "./text";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full",
	{
		variants: {
			variant: {
				primary: "bg-green-light",
				secondary: "bg-pink-light",
			},
			size: {
				sm: "py-0.5 px-2",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
		},
	},
);

const badgeTextVariants = cva("", {
	variants: {
		variant: {
			primary: "text-green-dark",
			secondary: "text-pink-dark",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

interface badgeProps
	extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

function Badge({ variant, className, children, ...props }: badgeProps) {
	return (
		<div className={badgeVariants({ variant, className })} {...props}>
			<Text variant={"body-md-bold"} className={badgeTextVariants({ variant })}>
				{children}
			</Text>
		</div>
	);
}

export default Badge;
