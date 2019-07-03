import { Component } from "@angular/core";
import { SvgIconRegistryService } from "@slb-dls/angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public modalId = "MyID";
  public title = "My Title";
  public mode = "full"; // single

  public namespace = "slb-icons";
  private icons = Array<SVGSymbolElement>();
  private icons2 = Array<SVGSymbolElement>();

  constructor (private _iconRegistry: SvgIconRegistryService) {
    this._iconRegistry.addSvgIconSetInNamespace(this.namespace, "./assets/icons/svg-symbols.svg");
    this._iconRegistry.getIconSetConfigSvg(this.namespace)
      .subscribe((data: any) => {
        data.shift();
        const length = Math.floor(data.length / 2);
        this.icons = data.slice(0, length);
        this.icons2 = data.slice(length, data.length);
      });
  }
}
