import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-team-card',
    templateUrl: './team-card.component.html',
    styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
    peoples: [
        {
            name: 'Rahat',
            position: 'CEO',
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
