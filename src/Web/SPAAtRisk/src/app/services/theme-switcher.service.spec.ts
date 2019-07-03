import { ThemeSwitcherService, Theme } from "./theme-switcher.service";

class ThemeSwitcherServiceWrapper extends ThemeSwitcherService {
  public get MockDocument(): Document {
    return this.documentReference;
  }

  public set MockDocument(value: Document) {
    this.documentReference = value;
  }
}

describe("Theme Switcher Service", () => {
  let mockDocument: any;
  let mockStylesheets: HTMLLinkElement[];

  beforeEach(() => {
    mockStylesheets = [
      { rel: "stylesheet", title: "Light", disabled: true } as HTMLLinkElement,
      { rel: "alternate stylesheet", title: "Dark", disabled: true } as HTMLLinkElement,
      { rel: "alternate stylesheet", title: "something else", disabled: true } as HTMLLinkElement
    ];

    mockDocument = {
      getElementsByTagName: () => mockStylesheets
    };
  });

  it("should be created", () => {
    const service = new ThemeSwitcherService();
    expect(service).toBeTruthy();
  });

  it("should switch theme if the relevant link element exists", () => {
    const service = new ThemeSwitcherServiceWrapper();
    service.MockDocument = mockDocument;

    service.switchTheme(Theme.Dark);

    expect(mockStylesheets[0].disabled).toBeTruthy();
    expect(mockStylesheets[1].disabled).toBeFalsy();
    expect(mockStylesheets[2].disabled).toBeTruthy();
  });

  it("should cache theme name if the relevant link element exists", () => {
    const service = new ThemeSwitcherServiceWrapper();
    service.MockDocument = mockDocument;
    const expectedTheme = Theme.Dark;

    service.switchTheme(expectedTheme);

    expect(service.currentTheme).toBe(expectedTheme);
  });

  it("should not switch theme if no relevant link element exists", () => {
    mockDocument = { getElementsByTagName: () => [] };

    const service = new ThemeSwitcherServiceWrapper();
    service.MockDocument = mockDocument;

    service.switchTheme(Theme.Dark);

    expect(mockStylesheets[0].disabled).toBeTruthy();
    expect(mockStylesheets[1].disabled).toBeTruthy();
    expect(mockStylesheets[2].disabled).toBeTruthy();
  });

  it("should not cache theme name if no relevant link element exists", () => {
    mockDocument = { getElementsByTagName: () => [] };

    const service = new ThemeSwitcherServiceWrapper();
    service.MockDocument = mockDocument;

    const nonExistentTheme = Theme.Dark;
    service.switchTheme(nonExistentTheme);

    expect(service.currentTheme).not.toBe(nonExistentTheme);
  });
});
