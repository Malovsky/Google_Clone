import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  console.log(signIn.toString());

  const { data: session } = useSession();
  console.log({ data: session });

  return session ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={session?.user?.image || ""} alt="Photo de profil" />
    </>
  ) : (
    <>
      <button onClick={(event) => signIn()}>Sign in</button>
    </>
  );
};

export default User;
