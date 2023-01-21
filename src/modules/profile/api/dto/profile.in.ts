export interface ProfileIn {
    profile: Profile;
}

export interface Profile {
    username: string;
    bio?: any;
    image: string;
    following: boolean;
}
