import Input from "@/components/Atoms/input/index";
import Button from "@/components/Atoms/button/index";
import { doc, setDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "@/../../firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Test = () => {

  //   const getUserSignUp = async (data) => {
  //     try {
  //       const res = await addDoc(collection(db, "User"), {
  //         email: "qweqe1@wldyd.com",
  //         name: "esdasf",
  //       });
  //       console.log(res);
  //     } catch (e) {
  //       console.error("회원가입error");
  //     }
  //   };
  // useEffect(()=>{
  //   getUserSignUp()
  // })
  
  
  
  return (
    <>
      <Input placeholder='test'/>
      <Button name='테스트'/>
    </>
  );
};

export default Test;
