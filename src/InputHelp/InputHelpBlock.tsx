import React, { FC } from "react";

type InputHelpBlockProps = {
  text: React.ReactNode;
};

export const InputHelpBlock: FC<InputHelpBlockProps> = ({ text = null }) =>
  text && (
    <div className="form-group__help" role="alert">
      <span>{text}</span>
    </div>
  );
