import {
  FC,
  HTMLAttributeAnchorTarget,
} from "react";
import Link from "next/link";
import {Button, IButtonProps} from "../Button/Button";


export interface IButtonLinkProps extends IButtonProps {
  href: string,
  target?: HTMLAttributeAnchorTarget
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  href,
  ...otherProps
}) => {
  return (
    <Link href={href}>
      <Button {...otherProps}/>
    </Link>
  )
}
