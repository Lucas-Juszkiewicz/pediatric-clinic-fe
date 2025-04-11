import styles from "./Header.module.css";
export const Header = () => {
	return (
		<div className={styles.header}>
			{/* <button className="menu-button button">Menu</button> */}
			<img src="logo2.png" alt="pediatric-clinic" className={styles.logo} />
		</div>
	);
};
