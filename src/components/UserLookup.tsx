import { FormEvent, useState } from 'react';
import GitHubUserSummary from './GitHubUserSummary';
import { Repository } from './Repository';
import './UserLookup.css';


export function UserLookup() {

    const [ username, setUsername ] = useState("");
    const [ submittedUsername, setSubmittedUsername ] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSubmittedUsername(username);
    }

    return (
        <div className="UserLookup">
            <form onSubmit={handleSubmit}>
                <label>Enter a GitHub username: 
                <input type="text" className="username" value={username} onChange={ e => setUsername(e.target.value)} />
                </label>
                <button type="submit">Show User</button>
            </form>
            <GitHubUserSummary username={submittedUsername}/>
        </div>
    )
}

export default UserLookup;