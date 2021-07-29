import { AppService } from './app.service';
import { ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //Sidenav Properties
  sidenavStatus: any;
  sidenavLinks = ['Dashboard', 'Approvals', 'Buyers', 'Sellers', 'Transactions', 'Settlements', 'App Home Screen', 'Complaints', 'Feedback', 'Send Notifications', 'FIDs', 'Settings'];

  sidenav = [
    { title: 'Dashboard', route: '/' },
    { title: 'Approvals', route: '/approvals' },
    { title: 'Buyers', route: '/buyers' },
    { title: 'Sellers', route: '/sellers' },
    { title: 'Transactions', route: '/transactions' },
    { title: 'Settlements', route: '/settlements' },
    { title: 'App Home Screen', route: '/app-home-screen' },
    { title: 'Complaints', route: '/complaints' },
    { title: 'Feedback', route: '/feedback' },
    { title: 'Send Notifications', route: '/notifications' },
    { title: 'FIDs', route: '/fids' },
    { title: 'Settings', route: '/settings' },
  ];

  //Mobile Width
  mobileQuery: any;
  _mobileQueryListener: any;

  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {}
    
  ngOnInit() {
    //Updating the state using behaviour subject
    this.appService.sidebarStatus$.subscribe((status) => this.sidenavStatus = status);

    //Code here for knowing whether the screen is mobile or desktop
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => {
      //Open sidenav for desktop 
      if(!this.mobileQuery.matches) {
        this.appService.sidebarStatus$.next(true);
      }

      return this.changeDetectorRef.detectChanges();
    }  
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
    
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onMenuClick() {
    this.appService.sidebarStatus$.next(!this.sidenavStatus);
  }

  onSidenavLinkClick() {
    if(this.mobileQuery.matches) {
      this.appService.sidebarStatus$.next(!this.sidenavStatus);
    }
  }
}
