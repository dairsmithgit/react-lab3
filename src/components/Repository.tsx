import { UserRepository } from '../model/github-model';
import { fetchUserRepository } from '../service/GitHubApiService';
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
}