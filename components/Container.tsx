import Footer from "./Footer";
import Header from "./Header";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container: React.FC = (props: ContainerProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Container;
