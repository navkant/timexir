import { GlobeAltIcon, ClockIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function TimexirLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center      text-white`}
    >
      <div className="mx-20 bg-cyan-300">
        <div className=" bg-pink-100 ">
          <ClockIcon className="h-24 w-24 rotate-[0deg]" />
        </div>
      </div>
      <p>Timexir</p>
    </div>
  );
}
