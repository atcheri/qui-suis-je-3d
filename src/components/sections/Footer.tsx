import { type FC } from "react";

import Logo from "../Logo";

const Footer: FC = () => {
  return (
    <footer className="p-4 md:px-6 md:py-8 my-20">
      <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col gap-4 items-center justify-center">
        <Logo />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} QuiSuiJe™. No Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
