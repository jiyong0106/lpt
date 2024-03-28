import styles from "./input.module.scss";
const Input = ({ id, label, register, content, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input {...register} {...rest} />
      {content}
    </div>
  );
};

export default Input;
