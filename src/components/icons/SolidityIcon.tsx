import { type FC } from "react";

import { type IconProps } from "./types";

export const SolidityIcon: FC<IconProps> = (props) => {
  return (
    <svg viewBox="0 0 523.9 812.97" xmlns="http://www.w3.org/2000/svg" width="1611" height="2500" {...props}>
      <path d="M391.93 0l-130.7 232.3H0L130.6 0z" opacity=".45" />
      <path d="M261.23 232.3h261.3L391.94 0H130.6z" opacity=".6" />
      <path d="M130.6 464.5l130.63-232.2L130.6 0 0 232.3z" opacity=".8" />
      <path d="M131.88 812.97l130.7-232.3H523.9l-130.7 232.3z" opacity=".45" />
      <path d="M262.58 580.67H1.28l130.6 232.3H393.2z" opacity=".6" />
      <path d="M393.2 348.45L262.58 580.67l130.62 232.3 130.7-232.3z" opacity=".8" />
    </svg>
  );
};
