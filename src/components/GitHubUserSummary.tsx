import { UserInfo, UserRepository } from '../model/github-model';
import { fetchUserProfile, fetchUserRepository } from '../service/GitHubApiService';
import { useState, useEffect } from 'react';

interface Props {
    username: string;
}

export function GitHubUserSummary({ username }: Props) {

    const [ selectUsername, setUsername ] = useState("");
    const [ userProfile, setUserProfile ] = useState<UserInfo | null>(null);

    useEffect(() => {
        fetchUserProfile(username).then(data => {
            setUserProfile(data);
        });
    }, [selectUsername]);

console.log(userProfile);

    return (
        <div className="GitHubUserSummary">
            {userProfile ? 
                    <div className="UserProfile">
                        <p>The {userProfile.name} ({userProfile.login})</p> 
                        <img src={userProfile.avatar_url}></img>
                        <p>{userProfile.html_url}</p>
                        </div> : 
                        <p>No user with username found</p>
        }
        </div>
    )
}

export default GitHubUserSummary;