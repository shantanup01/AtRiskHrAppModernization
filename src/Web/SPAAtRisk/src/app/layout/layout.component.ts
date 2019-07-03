import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-layout",
  templateUrl: "layout.component.html",
})

export class LayoutComponent {
  public nestedListContent = [
    {
      name: "List1", id: "id1", children: [
        { name: "List1 A", id: "id11" },
        { name: "List1 B", id: "id12" },
      ],
    },
    { name: "List2", id: "id2" },
    { name: "options", id: "id3" },
    { name: "options", id: "id4" },
  ];

 public totalResultsCount = 100;
 public perPageResultscount = 12;
 public refreshPagination = false;


 public showCheckBox = true;
 public stubTableContent = [
   { row1: "test", data: 5 },
   { row1: "rtest", data: 8 },
   { row1: "ztest2", data: 2 },
   { row1: "Atest", data: 10 },
 ];
 public tableConfig = { pageSize: 3, showLineBreak: false, showCheckBox: true};

}
