import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiretivaEstruturalComponent } from "../../components/diretiva-estrutural/diretiva-estrutural.component";
import { DiretivaAtributoComponent } from "../../components/diretiva-atributo/diretiva-atributo.component";
import { NgContentComponent } from "../../components/ng-content/ng-content.component";
import { OutputPropertyComponent } from "../../components/output-property/output-property.component";
import { CycleComponentComponent } from "../../components/cycle-component/cycle-component.component";

@Component({
	selector: "app-main",
	standalone: true,
	imports: [
		DiretivaEstruturalComponent,
		DiretivaAtributoComponent,
		NgContentComponent,
		OutputPropertyComponent,
		CycleComponentComponent,
		CommonModule,
	],
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss",
})
export class MainComponent {
	valueInput!: string;
	toggleBoolean = true;
	pedirItems: Array<string> = [];
	items(event: string) {
		this.pedirItems.push(event);
	}
}
