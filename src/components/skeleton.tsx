import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

const skeletonVariants = cva("animate-pulse bg-gray-200 pointer-events-none", {
	variants: {
		rounded: {
			sm: "rounded-sm",
			lg: "rounded-lg",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		rounded: "lg",
	},
});

interface SkeletonProps
	extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, rounded, ...props }: SkeletonProps) {
	return <div className={skeletonVariants({ rounded, className })} {...props} />;
}

export default Skeleton;
