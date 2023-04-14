import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://www.linkedin.com/in/ramazan-%C3%A7elik-590592231/" target="_blank">
                Ramazan Çelik
            </Link>
        </footer>
    );
}

export default Footer;