import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { DdeApiService } from '../dde-api.service';
import { CodeSnippet, CSVSourceCS, DB2SourceCS } from '../../model/code-snippet'

@Component({
  selector: 'dde-dashboard',
  templateUrl: './dde-dashboard.component.html',
  styleUrls: ['./dde-dashboard.component.css'],
})
export class DdeDashboardComponent implements OnInit {

//  public db2_sample_module : string;
  @Output() codeToRun = new EventEmitter<CodeSnippet>();

  constructor(private http: Http, private ddeApiService: DdeApiService ) {
    // console.log("in dde dashboad constructor");
    // console.log(this.ddeApiService.myVar);
    //
    // // get the sampleModule json ready
    // this.http.get('/assets/ddeDb2SampleModule.json').subscribe(
    //         data => {
    //           console.log("in dde-dashboard constructor");
    //           this.db2_sample_module = data.json();
    //           console.log(data.json());
    //         }
    //     );
  }

  ngOnInit() {

  }

  getAddSourceCode() {
    this.codeToRun.emit(CSVSourceCS);
  }


  // addDb2SampleSourceToDashboard(event) {
  //   console.log("in addDb2SampleSourceToDashboard");
  //   /*console.log(this.ddeApiService.dashboardAPI);
  //
  //   this.ddeApiService.dashboardAPI.addSources([{
  //     module: this.db2_sample_module,
  //     name: 'Test Source',
  //     id: 'myUniqueId123'
  //   }]);*/
  //   this.ddeApiService.addDb2SampleSource(this.db2_sample_module);
  // }

}
