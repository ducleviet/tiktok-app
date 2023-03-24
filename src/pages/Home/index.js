import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import AccountItemHome from './AccountItemHome';
import * as videosServices from '@/services/videosServices';

const cx = classNames.bind(styles);

const INIT_PAGE = Math.floor(Math.random() * 20) + 1;
const TYPE = 'for-you';

function Home() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const elmenListVideoRef = useRef();

    useEffect(() => {
        videosServices
            .videoApi({ type: TYPE, page })
            .then((data) => {
                setSuggestedVideos((prev) => [...prev, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    useEffect(() => {
        const listVideo = elmenListVideoRef.current;
        document.onscroll = () => {
            if (listVideo.clientHeight + listVideo.offsetTop + 84 === window.innerHeight + window.scrollY) {
                setPage(page + 1);
            }
        };
    });

    return (
        <div className={cx('wrapper')} ref={elmenListVideoRef}>
            {suggestedVideos.map((user) => (
                <AccountItemHome key={user.id} data={user} />
            ))}
        </div>
    );
}
export default Home;
