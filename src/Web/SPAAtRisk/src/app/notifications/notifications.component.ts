import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-notifications",
  templateUrl: "notifications.component.html",
})

export class NotificationsComponent {
  public modalId = "MyModalID";
  public title = "My Modal Title";
}
