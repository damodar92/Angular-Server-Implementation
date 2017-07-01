/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubProfileComponent} from './github-profile.component'
@Component({
    selector: 'my-app',
    template: `
        <github-profile></github-profile>
    `,
    directives:[GitHubProfileComponent]
   // providers: [PostService, HTTP_PROVIDERS]

})
export class AppComponent implements OnInit {
    // constructor(private _postService : PostService){
    //     this.ngOnInit();
    // }
    
    ngOnInit(){
        // this._postService.getPosts()
        // .subscribe(post => console.log(post[0].id));
    }
}
