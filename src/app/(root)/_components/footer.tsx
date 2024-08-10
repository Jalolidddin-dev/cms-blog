import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

function Footer() {
  return (
    <div className="flex justify-center flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">
        Get latest posts delivered <br /> right to your inbox
      </h1>
      <div className="flex gap-3 ">
        <Input className="w-80  h-12" type="email" placeholder="Email" />
        <Button variant={"destructive"} className="h-12 flex gap-4">
          <User />
          <span>Join today</span>
        </Button>
      </div>
    </div>
  );
}

export default Footer;
