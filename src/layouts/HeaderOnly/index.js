import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import Header from '@/layouts/components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header-container')} />
            <div className={cx('container')}>
                <div className={cx('sidebar-container')}>
                    <Sidebar className={cx('sidebar-body')} />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.prototype = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
