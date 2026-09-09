import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import clsx from "clsx";

interface Route {
  label: string;
  path: string;
}

interface Props {
  routes: Route[];
  langUrl: string;
  langLabel: string;
}

function Sidebar({ routes, langUrl, langLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center md:hidden">
        <IoMdMenu
          size={35}
          className="cursor-pointer hover:opacity-80"
        />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 bottom-0 left-0 w-full h-screen bg-zinc-800/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <nav
        className={`fixed top-0 bottom-0 right-0 w-80 h-screen py-4 px-8 bg-slate-100 dark:bg-zinc-800 border-l border-zinc-400 dark:border-zinc-700 shadow z-50 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)} className="mb-16">
            <IoClose size={30} className="cursor-pointer" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6">
          {routes.map((route) => (
            <li key={route.path}>
              <a
                href={route.path}
                className={clsx(
                  "text-base text-neutral-600 dark:text-neutral-50 hover:opacity-80 transition-opacity duration-100 ease-in-out"
                )}
              >
                {route.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-6 border-t border-zinc-300 dark:border-zinc-700">
          <a
            href={langUrl}
            className="text-sm font-semibold text-neutral-600 dark:text-neutral-50 hover:opacity-80 transition-opacity duration-100 ease-in-out"
          >
            {langLabel}
          </a>
        </div>
      </nav>
    </>
  );
}
export default Sidebar;