import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


const usersData = [{
    token: 'token',
    name: 'Hernán 1',
    img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
},
{
    token: 'token',
    name: 'Hernán 2',
    img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
},
{
    token: 'token',
    name: 'Hernán 3',
    img: 'https://pbs.twimg.com/profile_images/3123296673/f6a685a65ce2a1b5bfdd45108b714718_400x400.jpeg'
}];

@Injectable()
export class ListService {

    constructor() { }

    loadItems(): any {
        return setTimeout(() => {
            return Observable.of({
                usersData
            });
        }, 2000);
    }

}
