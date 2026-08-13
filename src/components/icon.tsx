import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("h-6 w-6", {
	variants: {
		animate: {
			true: "animate-spin",
			false: "",
		},
	},
	defaultVariants: {
		animate: false,
	},
});

interface IconProps
	extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
	svg: React.FC<React.ComponentProps<"svg">>;
}

function Icon({ svg: SvgComponent, animate, className, ...props }: IconProps) {
	return (
		<SvgComponent className={iconVariants({ animate, className })} {...props} />
	);
}

export default Icon;
