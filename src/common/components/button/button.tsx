import React, { FC, ReactElement, ReactNode, CSSProperties } from 'react';
import * as classnames from 'classnames';
import * as classes from './button.scss';

type ColorSwatches = 'default' | 'primary' | 'secondary';
type SizeSwatches = 'small' | 'normal' | 'large';
type ShapeStyles = 'contained' | 'outlined' | 'text';
type ButtonType = 'submit' | 'button';

type ButtonProps = {
  type?: ButtonType;
  content?: ReactNode;
  children?: ReactNode;
  color?: ColorSwatches;
  size?: SizeSwatches;
  shape?: ShapeStyles;
  oval?: boolean,
  classNames?: string;
  styles?: CSSProperties;
  onClick: () => void
};

export const Button: FC<ButtonProps> = ({
  type = 'submit',
  color = 'default',
  size = 'normal',
  shape = 'text',
  oval = false,
  classNames = '',
  styles = {},
  onClick = () => ({}),
  content,
  children,
}: ButtonProps): ReactElement<ButtonProps> => {

  const className = classnames(
    classes.button,

    classNames,
  );

  return (
    <button
      type={type}
      className={className}
      style={styles}
      onClick={onClick}
    >
      {children || content}
    </button>
  );
};