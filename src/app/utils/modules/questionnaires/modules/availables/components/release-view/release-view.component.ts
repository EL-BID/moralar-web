import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-release-view',
  templateUrl: './release-view.component.html',
  styleUrls: ['./release-view.component.sass']
})
export class ReleaseViewComponent {
  @Input()
  release: any;

}
