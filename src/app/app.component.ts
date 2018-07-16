import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    peoples: any;
    selectedPeoples: any;
    activePeople: any;
    ratings: any;

    constructor(private httpService: HttpClient) {
    }

    ngOnInit() {
        this.httpService.get('./assets/people.json').subscribe(
            data => {
                this.peoples = data.People as string[];	 // FILL THE ARRAY WITH DATA.
                this.selectedPeoples = this.peoples;
                this.setUser(0);
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }

    onSearch = (searchText) => {
        this.selectedPeoples = this.peoples.filter(people => people.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    };


    setUser = (index) => {
        this.ratings = [];
        for (let i = 0; i < 5; i++) {
            this.ratings.push({filled: false});
        }
        this.activePeople = this.selectedPeoples[index];
        for (let i = 0; i < this.activePeople.rating; i++) {
            this.ratings[i].filled = true;
        }
    };

    userClick = (index) => {
        console.log(index);
        this.setUser(index);
    };

}
