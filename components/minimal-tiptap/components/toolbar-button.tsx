import * as React from "react";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps extends React.ComponentPropsWithoutRef<typeof Toggle> {
  isActive?: boolean;
  tooltip?: string;
  tooltipOptions?: TooltipContentProps;
}

export const ToolbarButton = React.forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ isActive, children, tooltip, className, tooltipOptions, ...props }, ref) => {
    const toggleButton = (
      <Toggle
        size="sm"
        ref={ref}
        className={cn("size-8 p-0", { "bg-accent": isActive }, className)}
        aria-pressed={isActive}
        aria-label={tooltip} // Provide an accessible label
        {...props}
      >
        {children}
      </Toggle>
    );

    if (!tooltip) {
      return toggleButton;
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{toggleButton}</TooltipTrigger>
        <TooltipContent
          {...tooltipOptions}
          role="tooltip" // Ensure the tooltip is recognized as a tooltip
          aria-hidden={!isActive} // Hide the tooltip from screen readers when not active
        >
          <div className="flex flex-col items-center text-center">{tooltip}</div>
        </TooltipContent>
      </Tooltip>
    );
  }
);

ToolbarButton.displayName = "ToolbarButton";

export default ToolbarButton;
