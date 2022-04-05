const simpleGit = require('simple-git')();
const simpleGitPromise = require('simple-git/promise')();

const repo = 'repogit';  //Repo name
// User name and password of your GitHub
const userName = 'saicharan5560@gmail.com';
const password = 'Bri!!iouser@1';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
simpleGit.addConfig('user.email','saicharan5560gmail.com');
simpleGit.addConfig('user.name','saicharanhr');
// Add remore repo url as origin to repo
//simpleGitPromise.addRemote('origin',gitHubUrl);
simpleGit.init().addRemote('origin',gitHubUrl);
console.log('Inside init');
// Add all files for commit
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log(addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
        console.log(successCommit);
     }, (failed) => {
        console.log('failed commmit');
 });
// Finally push to online repository
 simpleGitPromise.push('origin','master')
    .then((success) => {
       console.log('repo successfully pushed');
    },(failed)=> {
       console.log('repo push failed');
 });