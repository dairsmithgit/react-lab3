import { UserRepository } from '../model/github-model';
import { fetchUserProfile, fetchUserRepository } from '../service/GitHubApiService';
import { useState, useEffect } from 'react';

interface Props {
    repo: UserRepository;
}

export function Repository({ repo }: Props) {

    const [ selectUsername, setUsername ] = useState("");
    const [ repos, setRepos ] = useState<UserRepository | null>(null);

    //the fetch is working but unable to see elements below

    return (
        <div className="Repository">
            {repo ? 
            <div className="UserRepository">
                <p>{repo.name}</p>
                <p>{repo.description}</p>
                <p>Language: {repo.language}</p>
                <p>Last Updated {repo.pushed_at}</p>
            </div> :
            <p>No repositories with that username found</p>
        }
        </div>
    )
}

export default Repository;