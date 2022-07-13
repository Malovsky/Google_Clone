import { v4 as uuidv4 } from "uuid";
import { getProviders } from "next-auth/react";
import Image from "next/image";

type Provider = {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

type SignInProps = {
  providers: Provider;
};

const signIn: React.FC = ({ providers }: any) => {
  console.log(providers);

  return (
    <div className="">
      {Object.values(providers).map((provider) => (
        <div key={uuidv4()} className="">
          <p className="text-9xl font-semibold text-center m-16">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-500">e</span>
          </p>
          <p className="text-center text-lg italic">
            This website is created for learning purpose
          </p>
        </div>
      ))}
    </div>
  );
};

export default signIn;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
