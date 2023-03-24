import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItemHome.module.scss';

import { CheckIcon, CommenIcon, LikeIcon, MucsicIcon, ShareIcon } from '@/components/Icons';
import Button from '@/components/Button';
import Videos from '@/components/Videos';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function AccountItemHome({ data }) {
    const videoRef = useRef();

    return (
        <div className={cx('conatainer-line')}>
            <div className={cx('container')}>
                <Link to={`/${data.user.nickname}`} className={cx('avatar-container')}>
                    <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                </Link>
                <div className={cx('container-conten')}>
                    <div className={cx('text-container')}>
                        <Link to={`/@${data.user.nickname}`} className={cx('info-user')}>
                            <h3 className={cx('user-name')}>
                                <span>{data.user.last_name + data.user.first_name}</span>
                                {data.user.tick && <CheckIcon className={cx('icon-check')} />}
                            </h3>
                            <h4 className={cx('nick-name')}>{data.user.nickname}</h4>
                        </Link>
                        <Button ouline small className={cx('btn-follow')}>
                            Follow
                        </Button>
                        <span className={cx('description')}>{data.description}</span> <br></br>
                        <h4 className={cx('title-music')}>
                            <a href="/">
                                <MucsicIcon className={cx('music-icon')} />
                                <span>{data.music}</span>
                            </a>
                        </h4>
                    </div>
                    <div className={cx('video-container')}>
                        <div className={cx('video-wapper')}>
                            <Videos data={data} ref={videoRef} />
                        </div>
                        <div className={cx('icon-container')}>
                            <button className={cx('btn-icon')}>
                                <span className={cx('btn-backroug')}>
                                    <LikeIcon />
                                </span>
                                <span className={cx('count-status')}>{data.likes_count}</span>
                            </button>
                            <button className={cx('btn-icon')}>
                                <span className={cx('btn-backroug')}>
                                    <CommenIcon />
                                </span>
                                <span className={cx('count-status')}>{data.comments_count}</span>
                            </button>
                            <button className={cx('btn-icon')}>
                                <span className={cx('btn-backroug')}>
                                    <ShareIcon />
                                </span>
                                <span className={cx('count-status')}>{data.shares_count}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountItemHome;
