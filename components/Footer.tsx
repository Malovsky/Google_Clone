const Footer = () => {
  return (
    <footer className="flex absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-4 text-sm text-gray-600">
      Copyright &copy; {new Date().getFullYear()} Kevin MASLOWSKI
    </footer>
  );
};

export default Footer;
