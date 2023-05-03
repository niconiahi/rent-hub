// import * as Switch from "@radix-ui/react-switch";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

// <Switch.Root className="SwitchRoot" id="airplane-mode">
  //   <Switch.Thumb className="SwitchThumb" />
// </Switch.Root>

export default function Index() {
  return (
    <main className="h-screen w-screen items-center justify-center flex">
      <Link to='join' className='hover:bg-gray-100 py-1 px-2 transition-all rounded-md'>Join</Link>
    </main>
  );
}
