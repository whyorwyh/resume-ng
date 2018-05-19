import { Component, OnInit } from "@angular/core";

@Component({
    selector:'person',
    templateUrl:'./person.component.html',
    styleUrls:['./person.component.css']
})

export class PersonComponent implements OnInit{
    ifDisplay:boolean;
    constructor(){}

    ngOnInit() {
        this.ifDisplay = true;
        setTimeout(function(){
            console.log('sdfdsf');
            this.ifDisplay = false;
        },2000);
    }
}