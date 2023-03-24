import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('discover-title')}>Discover</h2>
            <div className={cx('discover-list')}>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
                <Button round small className={cx('btn')}>
                    #suthatla
                </Button>
            </div>
        </div>
    );
}

export default Discover;
