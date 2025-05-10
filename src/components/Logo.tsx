import { type FC } from "react";

import { ItsutsuInazumaIcon } from "./icons";

const Logo: FC = () => {
  return (
    <a href="/" className={`my-2 flex items-center space-x-1 text-indigo-900 dark:text-indigo-300`}>
      <ItsutsuInazumaIcon className="h-8 w-8 flex-shrink-0 mr-3 fill-indigo-900 dark:fill-slate-200" />
      <span className="font-alice font-bold text-3xl text-indigo-900 dark:text-slate-200 tracking-tight whitespace-nowrap">
        5Inazuma
      </span>
    </a>
  );
};

export default Logo;
