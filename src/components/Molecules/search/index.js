import Input from "@/components/Atoms/input";
import Image from "next/image";
const Search = () => {
  return (
    <>
      <Input placeholder='검색어를 입력해 주세요' />
      <Image src={"/assets/search.svg"} width={20} height={20} className="search"/>
    </>
  );
};

export default Search;
