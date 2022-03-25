import { Component } from '@angular/core';


@Component({
  selector: 'dashboard-cmp',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
  public calculateDayBetweenDates(startDate: Date, endDate: Date) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(startDate);
    var secondDate = new Date(endDate);
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
  }

  public findElementInTree(tree: any[], element: any) { 
    for (var i = 0; i < tree.length; i++) {
      if (tree[i].id == element.id) {
        return tree[i];
      }
      if (tree[i].children) {
        var found = this.findElementInTree(tree[i].children, element);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

}
