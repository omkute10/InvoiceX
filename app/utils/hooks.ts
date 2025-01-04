import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login"); //If the session is not valid then the user will be redirected to the main route
  }

  return session;
}
