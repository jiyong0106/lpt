import { db } from "@/../../firebase";
import { getDocs, collection } from "firebase/firestore";

const useEmailDuplicate = (setError) => {
  const isEmailDuplicate = async (email) => {
    try { 
      const res = await getDocs(collection(db, "User"));
      const result = res.docs.map((doc) => doc.data());

      const isDuplicateEmail = result.find((user) => user.email === email);

      if (isDuplicateEmail) {
        setError("email", {
          type: "manual",
          message: "중복된 이메일입니다.",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  return isEmailDuplicate;
};

export default useEmailDuplicate;