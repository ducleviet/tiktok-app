import { forwardRef, useImperativeHandle, useRef, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { PlayIcon } from '@/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Video = forwardRef(({ data, className, ...props }, ref) => {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    const onPlay = () => {
        videoRef.current.play();
    };

    const onPause = () => {
        videoRef.current.pause();
    };

    return (
        <div className={cx('wrapper')} onMouseOver={onPlay} onMouseOut={onPause}>
            <div className={cx('user-item')}>
                <div className={cx('padding-add')}>
                    <div className={cx('div-wrapper')}>
                        <div className={cx('play-cntainer')}>
                            <div className={cx('div-container')}>
                                <div className={cx('video-wrapper')}>
                                    <div className={cx('video-conten')}>
                                        <video
                                            src={data.file_url}
                                            className={cx('video', className)}
                                            ref={videoRef}
                                            loop={true}
                                            muted={true}
                                            {...props}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('video-title')}>
                <Link className={cx('title-link')}>
                    <span className={cx('title')}>{data.description}</span>
                </Link>
            </div>
            <div className={cx('play-icon')}>
                <PlayIcon />
            </div>
        </div>
    );
});

export default memo(Video);
