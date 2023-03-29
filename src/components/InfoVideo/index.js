import classNames from 'classnames/bind';
import styles from './InfoVideo.module.scss';

import Image from '../Image';
import Button from '../Button';
import { CheckIcon, CommenIcon, LikeIcon, MucsicIcon } from '../Icons';
import CommentUser from '../CommentUser';

const cx = classNames.bind(styles);

function InfoVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('info-container')}>
                    <span className={cx('avatar-user')}>
                        <Image
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/45fc905722f387839e5181ac42bf88ae~c5_100x100.jpeg?x-expires=1679817600&x-signature=2vB0VtPUavizR%2B9My1Dkf2Nn5c8%3D"
                            alt="nguoi tot"
                        />
                    </span>
                    <div className={cx('user-info')}>
                        <span className={cx('user-name')}>
                            ebe_duong61
                            <CheckIcon className={cx('check')} />
                        </span>
                        <span className={cx('describe')}>
                            𝑳𝒆 𝑨𝒏𝒉 𝑫𝒖𝒐𝒏𝒈👑
                            <span className={cx('dot')}>·</span>
                            <span className={cx('date')}>3-15</span>
                        </span>
                    </div>
                    <Button ouline className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('main-container')}>
                    <div className={cx('title-body')}>
                        <span className={cx('title')}>Cùng đi anh nhé</span>
                    </div>
                    <div className={cx('music')}>
                        <MucsicIcon className={cx('icon-music')} />
                        <span className={cx('name-music')}>nhạc nền - Chan__✨</span>
                    </div>
                    <div className={cx('share-container')}>
                        <div className={cx('flex-center')}>
                            <button className={cx('btn')}>
                                <span className={cx('icon-body')}>
                                    <LikeIcon className={cx('icon')} />
                                </span>
                                <span className={cx('count')}>34.5k</span>
                            </button>
                            <button className={cx('btn', 'margrin-btn')}>
                                <span className={cx('icon-body')}>
                                    <CommenIcon className={cx('icon')} />
                                </span>
                                <span className={cx('count')}>34.5k</span>
                            </button>
                        </div>
                        <div className={cx('link-video')}>
                            <p className={cx('link')}>
                                https://www.tiktok.com/@hphuoc.2003/video/7214471217032531227?is_from_webapp=1&sender_device=pc&web_id=7207691638000043522
                            </p>
                            <Button className={cx('btn-link')}>Copy link</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('comment-container')}>
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                    <CommentUser />
                </div>
                <div className={cx('bottom-container')}>
                    <div className={cx('bottom-contentr')}>Log in to comment</div>
                </div>
            </div>
        </div>
    );
}

export default InfoVideo;
