import {ButtonHTMLAttributes, FC} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'primary' | 'ghost'
}

export const Button: FC<IButtonProps> = ({
  className,
  skin = 'primary',
  children,
  ...otherProps
}) => {
  const classes = classNames(
    styles.button,
    styles[skin],
    className
  )

  return (
    <button
      className={classes}
      {...otherProps as IButtonProps}
    >
      {children}
    </button>
  )
}
