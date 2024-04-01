import styles from "./signInForm.module.scss";
import Button from "@/components/Atoms/button";
import Input from "@/components/Atoms/input";
import { useForm } from "react-hook-form";
import useUserSignIn from "@/components/api/userSignIn";
const SignInForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const userSignIn = useUserSignIn();
  
  const onSubmit = async (data) => {
    userSignIn(data);
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='email'
          type='email'
          placeholder='이메일'
          label='email'
          register={register("email", {
            required: "이메일을 입력해주세요",
          })}
        />
        {errors.email && (
          <p className={styles.email_error}>{errors.email.message}</p>
        )}
        <Input
          id='password'
          type='password'
          placeholder='password'
          label='password'
          register={register("password", {
            required: "패스워드를 입력해주세요",
          })}
        />
        {errors.password && (
          <p className={styles.password_error}> {errors.password.message} </p>
        )}

        <Button name='로그인' />
      </form>
    </div>
  );
};

export default SignInForm;
