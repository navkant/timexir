import { ClockIcon } from "@heroicons/react/24/outline";

export default function TimexirLogo() {
  return (
    <div className="flex flex-row items-center leading-none ">
      <ClockIcon className="h-12 w-12 md:h-20 md:w-20" />
      <p className="text-3xl">Timexir</p>
    </div>
  );
}
