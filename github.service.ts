import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Observable} from 'rxjs/observable';

@Injectable()

export class GitHubService{
    private _url = "https://api.github.com/users/";
    constructor(private _http: Http){

    }

    getUser(username){
        return this._http.get(this._url+username)
        .map(res => res.json());
    }

    getFollowers(username){
        return this._http.get(this._url+username+"/followers")
        .map(res=> res.json());
    }
}
