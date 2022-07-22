import { useRouter } from "next/router";

type SearchHeaderOptionProps = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
};

const SearchHeaderOption = ({
  title,
  Icon,
  selected,
}: SearchHeaderOptionProps) => {
  const route = useRouter();

  const selectTab = (title: string) => {
    route.push(
      `/search?term=${route.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex items-center space-x-2 border-b-4 border-transparent cursor-pointer pb-2
      hover:text-blue-500 hover:border-blue-500
      ${selected && "text-blue-500 border-blue-500"}`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
