import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroMainComponent } from './filtro-main/filtro-main.component';
import { ListComponent } from './components/list/list.component';
import { FiltroPipe } from './pipe/filtro.pipe';



@NgModule({
  declarations: [
    FiltroMainComponent,
    ListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroMainComponent
  ]
})
export class FiltrosModule { }
