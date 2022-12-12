import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { loadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        DropdownDirective,
        loadingSpinnerComponent,
        AlertComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        loadingSpinnerComponent,
        AlertComponent
    ],
})
export class SharedModule {}