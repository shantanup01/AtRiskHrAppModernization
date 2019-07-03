import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import {
  ButtonModule,
  CardModule, CardGroupModule,
  CarouselModule,
  CheckboxModule,
  DataTableModule,
  DatePickerModule,
  DropdownModule,
  IconModule,
  LoadingSpinnerModule,
  ModalModule,
  NavigationFrameworkSingleModule,
  PanelListModule,
  ProjectDetailModule,
  NavigationFrameworkModule,
  NumericInputModule,
  RadioButtonGroupModule,
  SearchFieldModule,
  SliderModule,
  TabControlModule, TabControlTextOnlyModule, TabComponent,
  TagModule,
  TextInputModule,
  ToolbarModule,
  TooltipModule,
  UserIdentityModule,
  NestedListModule,
  PaginationControlModule,
} from "@slb-dls/angular";

import { ColorPickerModule, PopoverModule, PopoverDirective } from "@slb-dls/angular-material";

import { InputsAndControlsComponent } from "./inputs-and-controls/inputs-and-controls.component";
import { IconsComponent } from "./icons/icons.component";
import { LayoutComponent } from "./layout/layout.component";
import { VisualizationsComponent } from "./visualizations/visualizations.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";
import { ThemeSwitcherService } from "./services/theme-switcher.service";
import { AtriskHistoryComponent } from './AtRisk/atrisk-history/atrisk-history.component';
import {AtriskService} from './services/atrisk.service'


  const appRoutes: Routes = [
    { path: "", redirectTo: "AtRisk", pathMatch: "full"},
    { path: "inputs", component: InputsAndControlsComponent },
    { path: "icons",  component: IconsComponent },
    { path: "layout",  component: LayoutComponent },
    { path: "notifications",  component: NotificationsComponent },
    { path: "visualizations",  component: VisualizationsComponent },
    { path: "theme-switcher", component: ThemeSwitcherComponent },
    {path: "AtRisk", component:AtriskHistoryComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    InputsAndControlsComponent,
    LayoutComponent,
    NotificationsComponent,
    VisualizationsComponent,
    ThemeSwitcherComponent,
    AtriskHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule,
    CardGroupModule,
    CarouselModule,
    CheckboxModule,
    DataTableModule,
    DatePickerModule,
    DropdownModule,
    IconModule,
    LoadingSpinnerModule,
    ModalModule,
    NavigationFrameworkSingleModule, NavigationFrameworkModule,
    NestedListModule,
    NumericInputModule,
    PaginationControlModule,
    PanelListModule,
    ProjectDetailModule,
    RadioButtonGroupModule,
    RouterModule.forRoot(appRoutes),
    SearchFieldModule,
    SliderModule,
    TabControlModule, TabControlTextOnlyModule,
    TagModule,
    TextInputModule,
    ToolbarModule,
    TooltipModule,
    UserIdentityModule,
    ColorPickerModule,
    PopoverModule
  ],
  providers: [ThemeSwitcherService,AtriskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
