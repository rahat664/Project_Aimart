import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
