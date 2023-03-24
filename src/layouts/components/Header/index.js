import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '@/assets/images';
import {
    CoinIcon,
    HelpIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MenuIcon,
    MessagesIcon,
    SettingIcon,
    UploadIcon,
    UserdIcon,
} from '@/components/Icons';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import Image from '@/components/Image';
import Search from '../Search';
import routesConfig from '@/config/routes';
import routes from '@/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcut',
    },
];

function Header({ className }) {
    const currentUser = false;

    const userMenu = [
        {
            icon: <UserdIcon />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <header className={classes}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <div>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('aciton-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <button className={cx('aciton-btn')} style={{ padDing: '3px, 3px, 0' }}>
                                <MessagesIcon />
                            </button>
                            <button className={cx('aciton-btn')}>
                                <InboxIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button to={routes.upload} text>
                                Up load
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM}>
                        {currentUser ? (
                            <Image
                                className={cx('use-avatar')}
                                alt="avata"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/7015245065136111617.jpeg?x-expires=1678615200&x-signature=LFknwqtXOiynySOKLa4TzHHrsVw%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <MenuIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
