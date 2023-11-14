"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr />
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? "active" : ""}>Home</li>
        </Link>
        <Link href="/protected">
          <li className={pathname === "/protected" ? "active" : ""}>
            Protected
          </li>
        </Link>
      </ul>
    </div>
  );
}
