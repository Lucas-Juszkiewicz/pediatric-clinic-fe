import styles from "./FrontPage.module.css";

export const FrontPage = () => {
	return <div className={`${styles.frontPage}`}>
    <img src="/logo.png" alt="logo" className={styles.logo} />
  </div>;
};
