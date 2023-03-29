import classNames from 'classnames/bind';
import styles from './ModerVideo.module.scss';

import InfoVideo from '@/components/InfoVideo';
import VideoModer from '@/components/VideoModer';
import * as commentServices from '@/services/commentServices';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ModerVideo() {
    const [commentUsers, setCommentUsers] = useState([]);

    useEffect(() => {
        commentServices
            .getComment(835)
            .then((data) => {
                console.log({ data });
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div>
            <div className={cx('wrapper')}>
                <VideoModer />
                <InfoVideo />
            </div>
        </div>
    );
}

export default ModerVideo;
