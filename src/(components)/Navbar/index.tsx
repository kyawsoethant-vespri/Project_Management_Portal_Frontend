import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"flex px-4 py-3 items-center justify-between bg-white"}>
      {/*Search Bar*/}
      <div className={"flex items-center gap-8"}>
        <div className={"flex relative w-[200px]"}>
          <Search
            className={
              "absolute h-5 w-5 left-[4px] mr-2 top-1/2 -translate-y-1/2 cursor-pointer dark:text-white"
            }
          />
          <input
            type="search"
            className={
              "w-full rounded border-none bg-gray-100 dark:bg-gray-700 placeholder-gray-500 p-2 pl-8 focus:outline-none focus:border-transparent dark:text-white dark:placeholder-white"
            }
            placeholder={"Search..."}
          />
        </div>
      </div>

      {/*Icons*/}
      <div className="flex items-center">
        <Link
          href={"/settings"}
          className={"h-min w-min hover:bg-gray-100 rounded p-2"}
        >
            <Settings className={"h-6 w-6 cursor-pointer"} />
        </Link>
        <div className="bg-gray-200 min-h-[2rem] w-[0.1rem] ml-2 mr-5 hidden md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
