import { UserRepository } from '../model/github-model';
import { fetchUserProfile, fetchUserRepository } from '../service/GitHubApiService';
import { useState, useEffect } from 'react';

interface Props {
    username: string;
}

export function Repository({ username }: Props) {

    const [ selectUsername, setUsername ] = useState("");
    const [ userRepository, setRepository ] = useState<UserRepository | null>(null);

    useEffect(() => {
        fetchUserRepository(username).then(data => {
            setRepository(data);
        });
    }, [selectUsername]);

    //the fetch is working but unable to see elements below

    return (
        <div className="Repository">
            {userRepository ? 
            <div className="UserRepository">
                <p>{userRepository.name}</p>
                <p>{userRepository.description}</p>
                <p>Language: {userRepository.language}</p>
                <p>Last Updated {userRepository.pushed_at}</p>
            </div> :
            <p>No repositories with that username found</p>
        }
        </div>
    )
}

export default Repository;