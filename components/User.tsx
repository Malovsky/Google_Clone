import { useSession, signIn, signOut } from "next-auth/react";

type UserProps = {
  classNameStyle: string;
};

const User = ({ classNameStyle }: UserProps) => {
  const { data: session } = useSession();

  return session ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${classNameStyle}`}
        onClick={(event) => signOut()}
        src={session?.user?.image || ""}
        alt="Photo de profil"
      />
    </>
  ) : (
    <>
      <button
        className={`text-white bg-blue-500 px-6 py-2 rounded font-medium hover:brightness-125 hover:shadow-md ${classNameStyle} whitespace-nowrap`}
        onClick={(event) => signIn()}
      >
        Sign in
      </button>
    </>
  );
};

export default User;
