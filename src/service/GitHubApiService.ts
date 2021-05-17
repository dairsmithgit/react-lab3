

const ghCredentials: string = process.env.REACT_APP_GITHUB_API_CREDENTIALS || "";

const credentials = btoa(ghCredentials);

export function fetchUserProfile() {
    // replace this with real func from lab when you get here
}