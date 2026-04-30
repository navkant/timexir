import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import TimexirLogo from "@/app/ui/timexir-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav2() {
  return (
    <div className="bg-cyan-300 flex flex-col h-full px-3 py-4 md:px-2">
      <Link href="/" className="mb-2 flex h-20 items-end justify-start">
        <div>Logo</div>
      </Link>
      <div>
        Navlinks{" "}
        <div>
          <form action="">
            <button>
              <div>Signout</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
