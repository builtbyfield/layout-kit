import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type CSSProperties, useId } from "react";
import { join } from "tailwind-merge";

const sizes = {
  sm: {
    height: "12px",
    width: "calc((var(--height) - 4px) * 2.5)",
    offset: "calc((var(--height) - 5.5px) * 1.5)",
  },
  md: {
    height: "16px",
    width: "calc((var(--height) - 4px) * 2.333)",
    offset: "calc((var(--height) - 5.5px) * 1.333)",
  },
  lg: {
    height: "20px",
    width: "calc((var(--height) - 4px) * 2)",
    offset: "calc(var(--height) - 6px)",
  },
} as const;
type Size = keyof typeof sizes;

export type SwitchProps = SwitchPrimitive.SwitchProps & {
  size?: Size;
};

export const Switch = ({
  id,
  children,
  className,
  size = "md",
  ...rest
}: SwitchProps) => {
  const generatedId = useId();
  const uid = id || generatedId;

  return (
    <div
      className="flex items-center [&>label]:pr-[0.33em] select-none"
      style={
        {
          "--height": sizes[size].height,
          "--width": sizes[size].width,
          "--offset": sizes[size].offset,
          "--thumb": "calc(var(--height) - 4px)",
        } as CSSProperties
      }
    >
      {children && (
        <label htmlFor={uid} className={className}>
          {children}
        </label>
      )}
      <SwitchPrimitive.Root
        id={uid}
        className={join(
          "rounded-full relative shrink-0 bg-gray-7 w-[var(--width)] h-[var(--height)]",
          "[&[data-state=checked]]:bg-green-9",
          "[&[data-disabled]]:"
        )}
        {...rest}
      >
        <SwitchPrimitive.Thumb
          className={join(
            "block w-[var(--thumb)] h-[var(--thumb)] bg-gray-1 will-change-transform rounded-full translate-x-0.5 transition-transform",
            "shadow-sm shadow-gray-8",
            "[&[data-state=checked]]:translate-x-[var(--offset)] [&[data-state=checked]]:shadow-green-10 [&[data-state=checked]]:shadow-sm"
          )}
        />
      </SwitchPrimitive.Root>
    </div>
  );
};
