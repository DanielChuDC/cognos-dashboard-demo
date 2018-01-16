import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DdeApiService } from '../dde-api.service';
import { Session } from '../../model/session';
import { CodeSnippet } from '../../model/code-snippet';
import { DefaultOption, CSVDataSource, DB2DataSource } from '../../model/data-source';

@Component({
  selector: 'dde-code-explorer',
  templateUrl: './dde-code-explorer.component.html',
  styleUrls: ['./dde-code-explorer.component.css']
})
export class DdeCodeExplorerComponent implements OnInit {

  @Output() session: EventEmitter<Session> = new EventEmitter<Session>();
  @Output() apiId: EventEmitter<string> = new EventEmitter<string>();
  @Input() codeSnippet : CodeSnippet;
  sessionTest : Session;
  dataSources = [DefaultOption, CSVDataSource, DB2DataSource];
  sampleModule : string;

  constructor(private ddeApiService: DdeApiService) { }

  ngOnInit() {
  }

  setExplorerDiv() {
      let classes =  {
          divsmall: this.codeSnippet && this.codeSnippet.size === 'small',
          divlarge: !this.codeSnippet || this.codeSnippet.size === 'large'
      };
      return classes;
  }

  async runCode(event) {
    if (this.codeSnippet.selection === 1) {
      this.sessionTest = await this.ddeApiService.createNewSession();
      this.session.emit(this.sessionTest);
    }
    else if (this.codeSnippet.selection === 2) {
      this.apiId.emit(await this.ddeApiService.createAndInitApiFramework());
    }
    else if (this.codeSnippet.selection === 3) {
      await this.ddeApiService.setDashboardApi();
    }
    else if (this.codeSnippet.selection === 4) {
      this.sampleModule = await this.ddeApiService.getDB2SampleModule();
      this.ddeApiService.addDb2SampleSource(this.sampleModule);
    }
  }

  onSelect(sourceValue) {
    for (var i = 0; i < this.dataSources.length; i++) {
      if (this.dataSources[i].value === sourceValue) {
        this.codeSnippet = this.dataSources[i].codeSnippet;
      }
    }
 }

}
