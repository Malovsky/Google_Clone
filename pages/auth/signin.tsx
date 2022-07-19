import { v4 as uuidv4 } from "uuid";
import { getProviders, signIn } from "next-auth/react";

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
        <div key={uuidv4()} className="flex flex-col items-center">
          <p className="text-9xl font-semibold text-center m-16">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-500">e</span>
          </p>
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
