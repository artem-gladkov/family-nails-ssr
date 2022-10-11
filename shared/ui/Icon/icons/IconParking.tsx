import {FC} from "react";
import {IIcon} from "./types";

export const IconParking: FC<IIcon> = ({className, size = 24}) => {
  return (
    <svg width="512px" height="512px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"/>
    </svg>
  )
}
