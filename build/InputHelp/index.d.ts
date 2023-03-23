import React, { FC } from 'react';

type InputHelpBaloonProps = {
    baloon: string;
};
declare const InputHelpBaloon: FC<InputHelpBaloonProps>;

type InputHelpBlockProps = {
    text: React.ReactNode;
};
declare const InputHelpBlock: FC<InputHelpBlockProps>;

export { InputHelpBaloon, InputHelpBlock };
