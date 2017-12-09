  /**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
  import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
  import { AuthGuard } from './services/auth-guard.service';
  import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';


  const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:userId', redirectTo: 'profile', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page/:pageid', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page/:pageid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page/:pageid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
  {path: 'user/:userId/website/:webid/page/:pageid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'widget-header', component: WidgetHeaderComponent, canActivate: [AuthGuard]},
  {path: 'widget-image', component: WidgetImageComponent, canActivate: [AuthGuard]},
  {path: 'widget-youtube', component: WidgetYoutubeComponent, canActivate: [AuthGuard]},
  {path: 'widget-text', component: WidgetTextComponent, canActivate: [AuthGuard]},
  {path: 'widget-html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
    {path: 'user/:userId/website/:webid/page/:pageid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
