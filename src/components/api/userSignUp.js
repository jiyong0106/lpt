import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/../../firebase";

const useUserSignUp = () => {
  const router = useRouter();
  const userSignUp = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      router.push("./signin");
    } catch (e) {
      console.error("error");
    }
  };
  return userSignUp;
};
export default useUserSignUp;
