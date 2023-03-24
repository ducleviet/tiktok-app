import classNames from 'classnames/bind';
import Button from '../Button';
import { CheckIcon, LinkIcon } from '../Icons';
import styles from './UserVideoList.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function UserVideoList({ data }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('info-container')}>
                <div className={cx('avatar-user')}>
                    <span className={cx('avatar-container')}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    </span>
                </div>
                <div className={cx('titlle-user')}>
                    <h2 className={cx('name-user')}>
                        {data.first_name + data.last_name}
                        {data.tick && <CheckIcon className={cx('icon-check')} />}
                    </h2>
                    <h1 className={cx('nickname')}>{data.nickname}</h1>
                    <div className={cx('conatainer-btn')}>
                        <Button primary large className={cx('btn-follow')}>
                            Follow
                        </Button>
                    </div>
                </div>
            </div>
            <h3 className={cx('count-container')}>
                <div className={cx('conten-count')}>
                    <span>{data.followings_count}</span>
                    <span className={cx('title-count')}>Following</span>
                </div>
                <div className={cx('conten-count')}>
                    <span>{data.followers_count}</span>
                    <span className={cx('title-count')}>Following</span>
                </div>
                <div className={cx('conten-count')}>
                    <span>{data.likes_count}</span>
                    <span className={cx('title-count')}>Following</span>
                </div>
            </h3>
            <h2 className={cx('bio')}>{data.bio}</h2>
            <a className={cx('link')} href={data.website_url}>
                <LinkIcon />
                <span className={cx('title-link')}>{data.website_url}</span>
            </a>
        </div>
    );
}

export default UserVideoList;
