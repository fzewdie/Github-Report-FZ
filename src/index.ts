import {GithubApiService} from './GithubApiService';
import * as _ from 'lodash';
import { User} from "./User";
import { Repo } from './Repo';

let svc = new GithubApiService();
if (process.argv.length < 3){
    console.log('Please pass the username as an argument');
}

else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(Repo) => Repo.forkCount]);
            user.repos = repos;
            console.log(user);
    });



    });
}