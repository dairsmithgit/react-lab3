import './GitHubUserSummary.css';
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

    return (
        <div className="GitHubUserSummary">
            {userProfile ? 
                    <div className="UserProfile">
                        <h2>{userProfile.name} ({userProfile.login})</h2> 
                        <img src={userProfile.avatar_url}></img>
                        <a href={userProfile.html_url}>View their GitHub Homepage</a>
                        </div> : 
                        <p>No user with username found</p>
        }
        </div>
    )
}

export default GitHubUserSummary;