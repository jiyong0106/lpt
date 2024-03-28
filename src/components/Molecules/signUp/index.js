import Button from "@/components/Atoms/button";
import Input from "@/components/Atoms/input";
import styles from "./signUpForm.module.scss";
import { useForm } from "react-hook-form";
import { email_reg, password_reg } from "@/utils/validation";
import useEmailDuplicate from "@/components/api/userEmailDuplicate";

const SignUpForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const isEmailDuplicate = useEmailDuplicate(setError);

  // const getUserSignUp = useSignUp();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='이메일'
          id='email'
          type='email'
          register={register("eamil", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: email_reg,
              message: "이메일 형식이 아닙니다",
            },
            onBlur: (e) => isEmailDuplicate(e.target.value),
          })}
        />
        {errors.email && (
          <p className={styles.email_error}>{errors.email.message}</p>
        )}
        <Input
          id='password'
          placeholder='password'
          type='password'
          autoComplete='off'
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: password_reg,
              message:
                "비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야합니다.",
            },
          })}
        />
        {errors.password && (
          <p className={styles.password_error}> {errors.password.message} </p>
        )}
        <Input
          id='passwordConfirm'
          placeholder='password Confirm'
          type='password'
          autoComplete='off'
          register={register("passwordConfirm", {
            required: "비밀번호를 입력해주세요",
            validate: (value) =>
              value === watch("password")
                ? true
                : "비밀번호가 일치하지 않습니다.",
          })}
        />
        {errors.passwordConfirm && (
          <p className={styles.password_Confirm_error}>
            {errors.passwordConfirm.message}{" "}
          </p>
        )}
        <Button name='버튼' />
      </form>
    </div>
  );
};

export default SignUpForm;
