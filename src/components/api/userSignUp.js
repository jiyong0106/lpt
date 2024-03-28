import { doc, setDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "@/../../firebase";
import { useRouter } from "next/router";

const useSignUp = () => {
  const router = useRouter()

  const getUserSignUp = async (data) => {
    console.log(data)
    try {
      const res = await addDoc(collection(db, "User"), {
        email: data.email,
        name: data.name,
      });
      router.push('./')
    } catch (e) {
      console.error("회원가입error");
    }
  };
  return getUserSignUp;
};

export default useSignUp;
