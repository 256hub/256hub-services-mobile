import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AuthorizationRoutingModule } from "./authorization-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthorizationRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthorizationModule { }
