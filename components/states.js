import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';


export const recoilUserId = atom({
    key: 'recoilUserId',
    default: '',
})

export const recoilUserName = atom({
    key: 'recoilUserName',
    default: '',
})

export const recoilUserEmail = atom({
    key: 'recoilUserEmail',
    default: '',
})

export const recoilUserAvatarUrl = atom({
    key: 'recoilUserAvatarUrl',
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

export const recoilUserCurrency = atom({
    key: 'recoilUserCurrency',
    default: '',
})

export const recoilUserPrimaryPaymail = atom({
    key: 'recoilUserPrimaryPaymail',
    default: '',
})
