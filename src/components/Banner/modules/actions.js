import {UPDATE_BANNER} from './types'


export const actUpdateBanner = (isHome, payload) => ({
    type: UPDATE_BANNER,
    payload: {banner: {...payload}, isHome}
})