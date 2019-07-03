import {Component} from "@angular/core";
import { ThemeSwitcherService, Theme } from "../services/theme-switcher.service";
import { SelectChange } from "@slb-dls/angular/dropdown/dropdown.component";

@Component({
  moduleId: module.id,
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.css"]
})
export class ThemeSwitcherComponent {
  public readonly themes: Theme[];

  constructor(private themeService: ThemeSwitcherService) {
    this.themes = [Theme.Light, Theme.Dark];
  }

  public get currentTheme(): Theme {
    return this.themeService.currentTheme;
  }

  public selectTheme(event: SelectChange): void {
    this.themeService.switchTheme(event.value);
  }
}
