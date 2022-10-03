import {ButtonHTMLAttributes, FC, useCallback, MouseEvent, HTMLAttributeAnchorTarget} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'primary' | 'ghost'
  size?: 'big' | 'default' | 'small'
  href?: string
  target?: HTMLAttributeAnchorTarget
}

export const Button: FC<IButtonProps> = ({
  className,
  skin = 'primary',
  onClick,
  size,
  href,
  target = "_self",
  children,
  ...otherProps
}) => {
  const classes = classNames(
    styles.button,
    styles[skin],
    styles[skin],
    className
  )

  const onClickButton = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if(href !== undefined) {
      window.open(href, target)
    }

    onClick && onClick(event)
  }, [href])

  return (
    <button
      className={classes}
      onClick={onClickButton}
      {...otherProps as IButtonProps}
    >
      {children}
    </button>
  )
}
