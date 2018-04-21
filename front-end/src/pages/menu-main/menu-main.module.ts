import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuMainPage } from './menu-main';

@NgModule({
  declarations: [
    MenuMainPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuMainPage),
  ],
})
export class MenuMainPageModule {}
