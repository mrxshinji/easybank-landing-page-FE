import { ButtonHTMLAttributes } from "react";

const CtaBtn = ({...otherProps}:ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...otherProps} type='button'>
      Request Invite
    </button>
  );
};

export default CtaBtn;
