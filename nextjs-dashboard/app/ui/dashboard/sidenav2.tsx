import Link from "next/link";
import TimexirLogo from "../timexir-logo";
import TimexirNavLinks from "./timexir-nav-link";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav2() {
  return (
    <div className="flex h-full flex-col  px-3 py-4 md:px-2">
      <Link
        href="/timexir"
        className="mb-2 flex h-20 items-end justify-start md:h-40 p-4 bg-blue-600 rounded-md md:p-6"
      >
        <div className="w-32  md:w-40  ">
          <TimexirLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between  space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <TimexirNavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form action="">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
