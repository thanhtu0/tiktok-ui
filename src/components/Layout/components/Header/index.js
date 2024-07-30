import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAfrica,
    faEllipsisVertical,
    faKeyboard,
    faUser,
    faCoins,
    faWheatAlt,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en-US',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: 'zh-CN',
                    title: '简体中文',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: '日本語',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: '한국어',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Русский',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Português',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'tr',
                    title: 'Türkçe',
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Nederlands',
                },
                {
                    type: 'language',
                    code: 'sv',
                    title: 'Svenska',
                },
                {
                    type: 'language',
                    code: 'pl',
                    title: 'Polski',
                },
                {
                    type: 'language',
                    code: 'th',
                    title: 'ไทย',
                },
                {
                    type: 'language',
                    code: 'he',
                    title: 'עברית',
                },
                {
                    type: 'language',
                    code: 'da',
                    title: 'Dansk',
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi',
                },
                {
                    type: 'language',
                    code: 'cs',
                    title: 'Čeština',
                },
                {
                    type: 'language',
                    code: 'hu',
                    title: 'Magyar',
                },
                {
                    type: 'language',
                    code: 'ro',
                    title: 'Română',
                },
                {
                    type: 'language',
                    code: 'sk',
                    title: 'Slovenčina',
                },
                {
                    type: 'language',
                    code: 'id',
                    title: 'Bahasa Indonesia',
                },
                {
                    type: 'language',
                    code: 'ms',
                    title: 'Bahasa Melayu',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@luudiecphi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faWheatAlt} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Mailbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,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"
                                alt="Lưu Diệc Phi"
                                fallback="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/310294365_1861752030840079_8207258457514888868_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XlF-RpFfPq0Q7kNvgG5mNWT&_nc_ht=scontent.fdad3-3.fna&gid=A84Qkp9OR-L0CWm5mtRK4jY&oh=00_AYAGAPJJ7dKdgwnSU2vK4cMFRgFYuoeE1z2KvA4lM78ndg&oe=66ACE40F"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
