import { auth } from "../../../firebase";
import { useRouter } from "next/router";

const useUserLogout = () => {
  const router = useRouter();
  const user = auth.currentUser;

  const userLogout = async () => {
    try {
      await auth.signOut();
      alert("로그아웃");
      router.push("./");
    } catch (e) {
      console.error("error");
    }
    console.log(user);
  };
  return userLogout;
};
export default useUserLogout;
