import { UserInfo, UserRepository } from '../model/github-model';

const ghCredentials: string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa(ghCredentials);

export function fetchUserProfile(username: string): Promise<UserInfo> {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `Basic ${credentials}`
        }
    })
    .then(res => res.json())
    .then((data: UserInfo) => {
        return data;
    });
}

export function fetchUserRepository(username: string): Promise<UserRepository> {

    return fetch(`https://api.github.com/users/${username}/repos `, {
        headers: {
            Authorization: `Basic ${credentials}`
        }
    })
    .then(res => res.json())
    .then((data: UserRepository) => {
        return data;
    });
}