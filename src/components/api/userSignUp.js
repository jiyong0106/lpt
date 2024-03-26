import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "@/../../firebase";
const getUserInfo = async () => {
  try {
    const res = await addDoc(collection(db, "User"), {
      email: "jiyong@fire.com",
      name: "jji",
      nickname: "haha",
    });
    console.log(res);
  } catch (e) {
    console.error("error");
  }
  return res;
};

getUserInfo();
export default getUserInfo;
