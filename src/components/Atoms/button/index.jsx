import styles from "./button.module.scss";

const Button = ({ name, ...rest }) => {
  return <button className={styles.container}{...rest}>{name}</button>;
};

export default Button;
