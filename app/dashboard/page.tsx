
import { signOut } from "../utils/auth";
import { requireUser } from "../utils/hooks"

export default async function DashboardRoute() {
    const session = await requireUser();
    return (
        <div>
            <h1>Hello from the Dashboard Route</h1>
            <form
                action={async()=> {
                    "use server";
                    await signOut();
                }}
            >
                <button type="submit">Signout</button>
            </form>
        </div>
    )
}