import { getServerSession } from "next-auth";
import styles from "./page.module.css";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className={styles.main}>
      getServerSession result
      {session?.user?.name ? (
        <div>{session.user.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
    </main>
  );
}
