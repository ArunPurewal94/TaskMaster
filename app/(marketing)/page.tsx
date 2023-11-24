import Link from "next/link";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col")}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-indigo-300 text-indigo-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          TaskMaster helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-indigo-600 to-pink-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Think Forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with TaskMaster.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get TaskMaster for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
