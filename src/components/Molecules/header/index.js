import styles from "./header.module.scss";
import Button from "@/components/Atoms/button";
import Search from "../search";
import Image from "next/image";
import useUserLogout from "@/components/api/userLogout";
const Header = () => {
  const userLogout = useUserLogout();
  
  return (
    <div className={styles.container}>
      <div className={styles.cotent}>
        <Image
          src={"assets/googlesvg.svg"}
          alt='메인로고'
          width={150}
          height={40}
        />
        <div className={styles.search_wrapper}>
          <Search />
        </div>
        <div className={styles.btn_wrapper}>
          <Button name='로그아웃' onClick={userLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
