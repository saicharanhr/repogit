// Authentication using username and password
octokit.authenticate({
    type: 'basic',
    username: userName,
    password: password
});
// Variables for Repo name and description
var description = "repo creation using git api";
var name = "test-reo-2";
//Create a Repository online via Github Api
const createGitHubRepo = await octokit.repos.create(
   {folderName, repoDescription}
);