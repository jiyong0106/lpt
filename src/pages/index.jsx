import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Button from "@/components/Atoms/button";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import SignInForm from "@/components/Molecules/signInForm";

export default function Home() {
  // const router = useRouter();

  // const user = auth.currentUser;

  // const userLogout = async () => {
  //   try {
  //     await auth.signOut();
  //     alert("로그아웃");
  //     router.push("./");
  //   } catch (e) {
  //     console.error("error");
  //   }
  // };
  // console.log(user);
  return (
    <>
      <SignInForm />
    </>
  );
}
