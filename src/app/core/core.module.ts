import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material.module';
import {NavbarService} from './services/navbar.service';
import { NavbarStashedComponent } from './navbar-stashed/navbar-stashed.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent, DashboardComponent, LogoComponent, NavbarComponent, ProfileComponent, NavbarStashedComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    LogoComponent,
    NavbarComponent,
    NavbarStashedComponent,
    ProfileComponent,
    MaterialModule
  ],
  providers: [NavbarService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
