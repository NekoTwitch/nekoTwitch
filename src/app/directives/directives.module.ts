import { NgModule } from '@angular/core';
import { ResizeEmbedDirective } from './resize-embed/resize-embed.directive';

@NgModule({
  declarations: [
    ResizeEmbedDirective
  ],
  exports : [
    ResizeEmbedDirective
  ]
})
export class DirectivesModule { }
