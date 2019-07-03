import {Component} from "@angular/core";
import { SvgIconRegistryService } from "@slb-dls/angular";

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: "icons-component",
  templateUrl: "icons.component.html",
  styleUrls: ["icons.component.css"]
})

export class IconsComponent {
  public namespace = "slb-icons";
  public icons = Array<SVGSymbolElement>();
  constructor (private _iconRegistry: SvgIconRegistryService) {
    this._iconRegistry.addSvgIconSetInNamespace(this.namespace, "./assets/icons/svg-symbols.svg");
    this._iconRegistry.getIconSetConfigSvg(this.namespace)
      .subscribe((data: any) => {
        data.shift();
        const length = Math.floor(data.length / 2);
        this.icons = data.slice(0, data.length);
      });
  }
}
