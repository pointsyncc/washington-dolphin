import * as React from "react";
import { twMerge } from "tailwind-merge";
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          "flex min-h-[200px] pt-[15px] pl-[30px] w-full border-0  border-input px-3 py-2 text-[15px] shadow-sm placeholder:text-primary focus-visible:ring-ring bg-secondary disabled:cursor-not-allowed disabled:opacity-50 rounded-xxs border-b border-black focus:border-black focus-visible:outline-0 focus-visible:ring-0 focus:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 focus:outline-0  focus-visible:shadow-none placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0 placeholder:w-100 placeholder:overflow-hidden overflow-x-hidden",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
