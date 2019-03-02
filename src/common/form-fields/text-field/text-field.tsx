import React, { FC, ReactElement, memo } from 'react';
import { TextFieldProps } from './text-field.props';

export const Input: FC<TextFieldProps> = memo((props: TextFieldProps): ReactElement<TextFieldProps> => {


  return (
    <input
      type=""
    />
  )
});