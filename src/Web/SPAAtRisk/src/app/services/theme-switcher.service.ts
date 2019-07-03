import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

/**
 * An enumaration containing theme style sheets defined in the index.html file
 *
 * @note The textual representation should be contained in the style sheet’s
 * title attribute for it to be picked up by the theme switcher service
 */
export enum Theme {
  Light = "Light",
  Dark = "Dark"
}

/**
 * A service which is used to enable and disable alternate style sheets in the
 * application’s index.html file
 *
 * @todo provide your own implementation of saving the user’s theme preference
 */
@Injectable({
  providedIn: "root"
})
export class ThemeSwitcherService {
  protected documentReference: Document; // for unit testing
  private themeNameSubject: BehaviorSubject<Theme>;

  constructor() {
    this.documentReference = document;
    const initialTheme = Theme.Light; // TODO: calculate this or get from user preferences
    this.themeNameSubject = new BehaviorSubject<Theme>(initialTheme);
  }

  /** Returns an observable of theme name changes */
  public get themeChanged$(): Observable<Theme> {
    return this.themeNameSubject.asObservable();
  }

  /** Returns the name of the current theme */
  public get currentTheme(): Theme {
    return this.themeNameSubject.value;
  }

  /**
   * Switches the theme if the stylesheets exist
   *
   * It doesn’t limit the stylesheets to `alternate` sheets which allows for the
   * default theme to be disabled while maintaining browser compatibility
   *
   * Gotchas:
   * 1. All sheets must be disabled for the browser to detect a change
   *
   * @param {Theme} theme The Theme to change to
   */
  public switchTheme(theme: Theme): void {
    // Get all stylesheets that have a title attribute
    const stylesheets = Array.from(this.documentReference.getElementsByTagName("link"));
    const themesheets = stylesheets.filter(link => link.rel.includes("stylesheet") && link.title);

    // Check if any stylesheets contain the theme name: if not, don’t change
    if (!themesheets.find(sheet => sheet.title.includes(theme))) {
      return;
    }

    // Broadcast theme change
    this.themeNameSubject.next(theme);

    // Disable all stylesheets except the ones with the specified name
    themesheets.forEach(sheet => {
      sheet.disabled = true; // see gotcha #1
      if (sheet.title.includes(theme)) {
        sheet.disabled = false;
      }
    });
  }
}
