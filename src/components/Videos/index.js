import { useInView } from 'react-intersection-observer';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Videos.module.scss';

import { PlayIcon, SoundIcon } from '@/components/Icons';

const cx = classNames.bind(styles);

const Videos = forwardRef(({ data, className, ...props }, ref) => {
    const videoRef = useRef();
    const [playVideo, setPlayVideo] = useState(true);
    const { ref: refApi, inView } = useInView({
        threshold: 0.777,
    });

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    useEffect(() => {
        setPlayVideo(inView);
        if (playVideo === true) {
            videoRef.current.pause();
        } else if (playVideo === false) {
            videoRef.current.play();
            videoRef.current.muted = false;
        }
    }, [inView]);

    return (
        <div ref={refApi} className={cx('wrapper')}>
            <video
                src={data.file_url}
                className={cx('video', className)}
                ref={videoRef}
                controls
                loop={true}
                muted={true}
                autoPlay={true}
                {...props}
            />
            <div className={cx('play-icon')}>
                <PlayIcon />
            </div>
            <div className={cx('sound-icon')}>
                <SoundIcon />
            </div>
        </div>
    );
});

export default Videos;
