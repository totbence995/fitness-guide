import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '../loading-indicator.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent implements OnInit {
  isLoading: boolean;
  constructor(private loadingIndicatorService: LoadingIndicatorService) {
    this.loadingIndicatorService.isLoadingObservable
      .pipe()
      .subscribe(isLoading => (this.isLoading = isLoading));
  }

  ngOnInit() {}
}
