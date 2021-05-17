

export  interface UserInfo {
    name: string;
    username: string;
    avatarImage: string | undefined;
    link: string;
}

export interface UserRepository {
    repositoryName: string;
    githubLink: string;
    description?: string;
    language: string;
    lastUpdate: string;
    githubPagesUrl: string;
}