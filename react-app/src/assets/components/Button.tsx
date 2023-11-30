import { ReactNode } from "react";

interface Props {
  btnType?: "primary" | "secondary" | "success" | "danger";
  children: ReactNode;
  onClick: () => void;
}

function Button({ btnType = "primary", children, onClick }: Props) {
  return (
    <>
      <button className={"btn btn-" + btnType} onClick={onClick}>
        {children}{" "}
      </button>
    </>
  );
}

export default Button;
