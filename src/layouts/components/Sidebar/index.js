import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import router from '@/config/routes';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '@/components/Icons';
import Menu from './Menu';
import MenuItem from '@/layouts/components/Sidebar/Menu/MenuItem';
import SuggestedAccounts from '@/components/SuggestedAccounts';
import * as userServicrs from '@/services/userServices';
import Frame from '@/components/Frame';
import Discover from '@/components/Discover';
import Footer from '@/components/Footer';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar({ className }) {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        userServicrs
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prev) => [...prev, ...data]);
            })
            .catch((error) => console.error(error));
    }, [page]);

    const handleSeeAll = () => {
        setPage(2);
    };

    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <Menu>
                <MenuItem title="For You" to={router.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={router.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={router.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <Frame />
            <SuggestedAccounts label={'Suggested accounts'} data={suggestedUsers} onSeeAll={handleSeeAll} />
            <Discover />
            <Footer />
        </div>
    );
}

export default Sidebar;
