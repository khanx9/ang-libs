import { NgModule } from '@angular/core';
import { AitLabelComponent } from './components';
import { DemoLibsComponent } from './demo-libs.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [DemoLibsComponent, AitLabelComponent, HomeComponent],
  imports: [
  ],
  exports: [DemoLibsComponent, AitLabelComponent, HomeComponent]
})
export class DemoLibsModule { }
