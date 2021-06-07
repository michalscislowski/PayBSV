import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';


export const recoilUserId = atom({
    key: 'recoilUserId',
    default: '',
})

export const recoilUserStatus = atom({
    key: 'recoilUserStatus',
    default: '',
})
export const recoilUserAmount = atom({
    key: 'recoilUserAmount',
    default: '',
})

export const recoiluserProfile = atom({
    key: 'recoiluserProfile',
    default: '',
})
