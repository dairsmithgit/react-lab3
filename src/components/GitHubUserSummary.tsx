import './GitHubUserSummary.css';
import { UserInfo, UserRepository } from '../model/github-model';
import { fetchUserProfile, fetchUserRepository } from '../service/GitHubApiService';
import { useState, useEffect } from 'react';
import Repository from './Repository';

interface Props {
    username: string;
}

export function GitHubUserSummary({ username }: Props) {

    const [ repos, setRepos ] = useState<UserRepository[]>([]);
    const [ userProfile, setUserProfile ] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (username) {
            fetchUserProfile(username).then(data => {
                setUserProfile(data);
            });
        } else {
            setUserProfile(null);
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            fetchUserRepository(username).then(data => {
                setRepos([data]);
            });
        } else {
            setRepos([]);
        }
    }, [username]);

    return (
        <div className="GitHubUserSummary">
            {userProfile ? 
                    <div className="UserProfile">
                        <h2>{userProfile.name} ({userProfile.login})</h2> 
                        <img src={userProfile.avatar_url} alt=""></img>
                        <a href={userProfile.html_url}>View their GitHub Homepage</a>
                        </div> : 
                        <p>No user with username found</p>
        }

        <div>
            {repos.map(repo => 
            <Repository key={repo.name} repo={repo} />
                )}
        </div>
        </div>
    );
}

export default GitHubUserSummary;