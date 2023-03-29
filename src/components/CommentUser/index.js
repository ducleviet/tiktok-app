import classNames from 'classnames/bind';
import styles from './CommentUser.module.scss';
import { LikeWhiteIcon } from '../Icons';

const cx = classNames.bind(styles);

function CommentUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avarar-container')}>
                <span className={cx('avatar-body')}>
                    <img
                        className={cx('avatar')}
                        alt="avatr"
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/55f0f39bafcd5ac226408d618ec3d2cf~c5_100x100.jpg?x-expires=1679900400&x-signature=H%2BWebnJOOsUoN%2Fg7KKhLvCVwev0%3D"
                    ></img>
                </span>
            </div>
            <div className={cx('content-container')}>
                <span className={cx('nikname')}>Hong phuong</span>
                <p className={cx('comment')}>Chi xinh vay</p>
                <p className={cx('sub-content')}>
                    <span className={cx('date')}>22h ago</span>
                    <span className={cx('reply')}>Reply</span>
                </p>
            </div>
            <div className={cx('icon-container')}>
                <div className={cx('like-wrapper')}>
                    <LikeWhiteIcon />
                </div>
                <span className={cx('like')}>70</span>
            </div>
        </div>
    );
}

export default CommentUser;
