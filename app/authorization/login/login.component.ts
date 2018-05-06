import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls:["./login.component.scss"]
})
export class LoginComponent implements OnInit {

    myValues=["valod", "gvidon", "john", "suro"];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
