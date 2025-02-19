import { X } from "lucide-react";
import { ReactNode } from "react";

import "./index.scss";
import { AlertTypes } from "../../Type/AlertType";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  discrption: string;
}
const Alert = ({ type, icon, title, discrption }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-Title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X />
        </span>
      </div>

      <p>{discrption}</p>
    </div>
  );
};

export default Alert;
