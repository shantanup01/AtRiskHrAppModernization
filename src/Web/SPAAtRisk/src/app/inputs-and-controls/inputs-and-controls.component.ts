import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-inputs-and-controls",
  templateUrl: "inputs-and-controls.component.html",
})

export class InputsAndControlsComponent {
  public search = "test input string";
  public color = '';
  public dropdownOptions = [
    {
      label: "Marquez",
      selected: true,
      value: "one",
    },
    {
      label: "Pedrosa",
      value: "two",
    },
    {
      label: "Rossi",
      value: "three",
    },
    {
      disabled: true,
      label: "Stoner",
      value: "four",
    },
    {
      label: "Knight",
      value: "five",
    },
  ];

  public currentValue = new Date("02/14/2018");
  public minValue = new Date("02/09/2018");
  public maxValue = new Date("02/16/2018");
  public label = "My Radio Button Group";
  public rbgOtions = [
      { name: "options", id: "id1", value: "value1", checked: true },
      { name: "options", id: "id2", value: "value2" },
      { name: "options", id: "id3", value: "value3", disabled: true },
      { name: "options", id: "id4", value: "value4" },
  ];
}
