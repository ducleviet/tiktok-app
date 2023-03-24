import classNames from 'classnames/bind';
import styles from './Frame.module.scss';

import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Frame() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('frame-title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button ouline large className={cx('btn-login')}>
                Log In
            </Button>
        </div>
    );
}

export default Frame;
