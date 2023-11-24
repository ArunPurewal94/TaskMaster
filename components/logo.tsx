import { KanbanSquare } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 text-indigo-800 font-bold">
        <KanbanSquare
          className="hover:opacity-75 transition items-center gap-x-2 flex"
          size={35}
        />
        <p className="text-lg">TaskMaster</p>
      </div>
    </Link>
  );
};
