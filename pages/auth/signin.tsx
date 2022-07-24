import { v4 as uuidv4 } from "uuid";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type Provider = {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

type SignInProps = {
  providers: Provider[];
};

const signin = ({ providers }: SignInProps) => {
  return (
    <div className="flex justify-center mt-12 mb-12">
      {Object.values(providers).map((provider) => (
        <div key={uuidv4()} className="flex flex-col items-center my-16 mx-8">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/langfr-2880px-Google_2015_logo.svg.png"
              alt="Google logo"
              height="100"
              objectFit="cover"
              width="300"
            />
          </Link>
          <p className="text-center text-lg italic m-4">
            This website is created for learning purpose
          </p>
          <button
            className="text-white bg-red-400 px-6 py-2 rounded m-8 hover:bg-red-500"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default signin;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
