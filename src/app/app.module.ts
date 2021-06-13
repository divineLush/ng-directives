import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import BasicHighLightDirective from '../app/basic-highlight/basic-highlight.directive';
import BetterHighLightDirective from '../app/better-highlight/better-highlight.directive';
import HoverHighLightDirective from '../app/hover-highlight/hover-highlight.directive';
import BetterHoverHighlightDirective from '../app/better-hover/better-hover.directive';
import DynamicHoverHighlightDirective from '../app/dynamic-hover/dynamic-hover.directive';
import UnlessDirective from '../app/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighLightDirective,
    HoverHighLightDirective,
    BetterHoverHighlightDirective,
    DynamicHoverHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
