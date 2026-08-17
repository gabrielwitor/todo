import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import Text from "./text";
import Skeleton from "./skeleton";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full",
	{
		variants: {
			variant: {
				none: "",
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
			none: "",
			primary: "text-green-dark",
			secondary: "text-pink-dark",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

const badgeSkeletonVariants = cva("", {
	variants: {
		size: {
			sm: "w-7 h-7",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

interface badgeProps
	extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
	loading?: boolean;
}

function Badge({
	variant,
	size,
	className,
	children,
	loading,
	...props
}: badgeProps) {
	if (loading) {
		return (
			<Skeleton
				className={cx(
					badgeVariants({ variant: "none" }),
					badgeSkeletonVariants({ size }),
					className,
				)}
				rounded={"full"}
			/>
		);
	}

	return (
		<div className={badgeVariants({ variant, className })} {...props}>
			<Text variant={"body-md-bold"} className={badgeTextVariants({ variant })}>
				{children}
			</Text>
		</div>
	);
}

export default Badge;
