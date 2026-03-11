import { ReactNode } from "react";

type BadgeProps = {
  icon?: ReactNode;
  children: ReactNode;
};

export default function Badge({ icon, children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-6 py-1 rounded-md border border-gray-200 bg-gray-100 text-xs font-medium text-gray-700 w-fit">
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </span>
  );
}