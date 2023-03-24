import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-list')}>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Abount
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Newsroom
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Contaxt
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    ByteDance
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Abount
                </a>
            </div>
            <div className={cx('footer-list')}>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Titok for Good
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Advertise
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Developers
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Transparency
                </a>
            </div>
            <div className={cx('footer-list')}>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Help
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Safety
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Terms
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Privacy
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Creator
                </a>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Portal
                </a>
            </div>
            <div className={cx('footer-list')}>
                <a className={cx('nav-link')} href="https://www.facebook.com/profile.php?id=100007163259911">
                    Community Guidelines
                </a>
            </div>
            <span className={cx('span')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;
