export type PostsType = {
    id: number,
    text: string,
    avatarURL?: string
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string | undefined,
    large: string | undefined
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType

}
export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}