

export  interface UserInfo {
    name: string;
    login: string;
    avatar_url: string | undefined;
    html_url: string;
}

export interface UserRepository {
    name: string;
    html_url: string;
    description?: string;
    language: string;
    pushed_at?: string;
    urllink: string;
}