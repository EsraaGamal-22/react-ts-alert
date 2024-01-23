import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";
type AlertProps = {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  // reactnode : accept component or jsx
  children?: ReactNode;
};
export const Alert = ({
  type = "alert-error",
  icon,
  title,
  description,
  children,
}: AlertProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};
