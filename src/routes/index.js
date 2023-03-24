import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Upload from '@/pages/Upload';
import Profile from '@/pages/Profile';
import Live from '@/pages/Live';

import HeaderOnly from '@/layouts/HeaderOnly';
import DefaultLayout from '@/layouts/DefaultLayout';
import config from '@/config';

const publicRoures = [
    { path: config.routes.home, element: Home, index: 1, layout: DefaultLayout },
    { path: config.routes.following, element: Following, index: 2, layout: DefaultLayout },
    { path: config.routes.upload, element: Upload, index: 3, layout: HeaderOnly },
    { path: config.routes.profile, element: Profile, index: 4, layout: HeaderOnly },
    { path: config.routes.live, element: Live, index: 5, layout: DefaultLayout },
];
export { publicRoures };
