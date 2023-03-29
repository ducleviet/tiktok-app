import classNames from 'classnames/bind';
import styles from './VideoModer.module.scss';

const cx = classNames.bind(styles);

function VideoModer() {
    return <div className={cx('wrapper')}></div>;
}

export default VideoModer;
