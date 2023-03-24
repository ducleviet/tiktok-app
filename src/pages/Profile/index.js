import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import UserVideoList from '@/components/UserVideoList';
import Video from '@/components/Video';
import { LockIcon } from '@/components/Icons';
import * as profileUserServices from '@/services/profileUserServices';
const cx = classNames.bind(styles);

function Profile() {
    const params = useParams();
    console.log(params.nickname);
    const [userProfile, setUserProfile] = useState([]);

    useEffect(() => {
        profileUserServices
            .getUser(params.nickname)
            .then((data) => {
                setUserProfile(data);
            })
            .catch((err) => console.log(err));
    }, [params.nickname]);

    return (
        <div className={cx('wrapper')}>
            {/* {console.log('app', url)} */}
            <UserVideoList data={userProfile} />
            <div className={cx('container')}>
                <div className={cx('heander-container')}>
                    <p className={cx('btn-video', 'btn')}>
                        <span>Video</span>
                    </p>
                    <p className={cx('btn-lock', 'btn')}>
                        <LockIcon />
                        <span className={cx('title')}>Liked</span>
                    </p>
                    <div className={cx('line')}></div>
                </div>
                <div className={cx('video-list')}>
                    {userProfile.videos !== undefined &&
                        userProfile.videos.map((videos) => <Video key={videos.id} data={videos} />)}
                </div>
            </div>
        </div>
    );
}

export default Profile;
