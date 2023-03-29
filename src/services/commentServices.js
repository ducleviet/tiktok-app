import * as request from '@/utils/request';

export const getComment = async (idNumber) => {
    try {
        const res = await request.get(`videos/${idNumber}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
