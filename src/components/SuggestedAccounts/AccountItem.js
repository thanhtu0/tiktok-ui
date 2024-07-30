import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="data:image/jpeg;base64,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"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>thanhtuluu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Lưu Lê Thanh Tú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
