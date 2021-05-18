import GitHubUserSummary from './GitHubUserSummary';
import { Repository } from './Repository';
import './UserLookup.css';


export function UserLookup() {
    //placeholder again delete these when you start

    return (
        <div className="UserLookup">
            <form>
                <label>Enter a GitHub username: 
                <input type="text" className="username"></input>
                </label>
                <button type="submit">Show User</button>
            </form>
            <GitHubUserSummary username="dairsmithgit"/>
            <Repository username="dairsmithgit" />
        </div>
    )
}

export default UserLookup;