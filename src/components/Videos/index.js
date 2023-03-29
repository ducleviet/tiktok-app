import { useInView } from 'react-intersection-observer';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Videos.module.scss';

import { PauseIcon, PlayIcon, SoundIcon } from '@/components/Icons';

const cx = classNames.bind(styles);

const Videos = forwardRef(({ data, className, ...props }, ref) => {
    let play = true;
    const videoRef = useRef();
    const [playVideo, setPlayVideo] = useState(true);
    const [clickPlay, setClickPlay] = useState(play);
    const { ref: refApi, inView } = useInView({
        threshold: 0.7777,
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
            // videoRef.current.muted = false;
        }
    }, [inView]);

    const handllePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div ref={refApi} className={cx('wrapper')}>
            <video
                src={data.file_url}
                className={cx('video', className)}
                ref={videoRef}
                loop={true}
                muted={true}
                autoPlay={true}
                {...props}
            />
            <div className={cx('play-icon')}>
                {playVideo ? <PauseIcon onClick={handlePause} /> : <PlayIcon onClick={handllePlay} />}
            </div>
            <div className={cx('voice-container')}>
                <div className={cx('volume-control')}>
                    <div className={cx('Progress')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('bal')}></div>
                </div>
                <div className={cx('sound-icon')}>
                    <SoundIcon />
                </div>
            </div>
        </div>
    );
});

export default Videos;
