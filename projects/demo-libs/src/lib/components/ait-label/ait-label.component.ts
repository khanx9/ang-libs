import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ait-label',
    templateUrl: 'ait-label.component.html',
    styleUrls: ['./ait-label.component.scss']
})

export class AitLabelComponent implements OnInit {
    constructor() { }
    @Input() label : string;

    ngOnInit() { }
}