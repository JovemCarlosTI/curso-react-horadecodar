import {FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return <footer>
        <p>Desenvolvido por jovemcarlosti
            <ul className={styles.social_list}>
                <li><a href="https://www.linkedin.com/in/jovemcarlos/"><FaLinkedin /></a></li>
                <li><a href="https://github.com/JovemCarlosTI"><FaGithub /></a></li>

            </ul>
        </p>
    </footer>
}

export default Footer;