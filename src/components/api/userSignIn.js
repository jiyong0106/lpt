import { doc, setDoc, getDocs, collection,onSnapshot } from "firebase/firestore";
import { db } from "@/../../firebase";
import axios from "axios";

const getUserSignIn = async () => {
  const res = await getDocs(collection(db, "User"));
  const result = res.docs.map((doc) => doc.data());
  return result;
};
export default getUserSignIn

//data 는 인풋에 입력되는 data (react-hook-form)
//http://localhost:3000/api/profile

// setDoc과 addDoc으로 추가해 줄 수 있다. 두 함수의 차이점은, setDoc의 경우 ID를 직접 지정할 수 있으나,
//addDoc은 아이디가 자동으로 생성 된다는 것

//getDocs는 컬렉션에서 모든 문서를 불러온다.
// getDoc메서드는 단일 문서 데이터만 불러온다.

//데이터 실시간으로 가져오기 : onSnapshot
// getDoc과 마찬가지로 Firestore에 저장된 document를 가져오는데 사용되는 메서드이다. 단, 차이점이 존재하는데
// Firestore에 저장된 document나 collection의 변경 사항을 실시간으로 감지하고 처리하는데 사용되는 메서드이다.

// 컬렉션(collection)과 문서(doc)
