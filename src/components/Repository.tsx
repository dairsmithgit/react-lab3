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

    return (
        <div className="Repository">
            {userRepository ? 
            <div className="UserRepository">

            </div> :
            <p>No repositories with that username found</p>
        }
        </div>
    )
}