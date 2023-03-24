import * as request from '@/utils/request';

export const getUser = async (urlProfile) => {
    try {
        const res = await request.get(`users/@${urlProfile}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
