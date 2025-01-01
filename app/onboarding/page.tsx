import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButton";

export default function OnBoarding() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">You are almost Finished!</CardTitle>
          <CardDescription>
            Enter your information to create an Account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>First Name</Label>
                <Input placeholder="Om"></Input>
              </div>
              <div className="grid gap-2">
                <Label>Last name</Label>
                <Input placeholder="Kute"></Input>
              </div>
            </div>
            <div className="grid gap-2">
                <Label>Address</Label>
                <Input placeholder="Pune, India"></Input>
            </div>
            <SubmitButton text="Finish"/>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
