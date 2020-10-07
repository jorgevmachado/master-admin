import {AfterViewInit, Component, HostBinding, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {THEME, THEME_AUTO_CONTRASTE} from './app.constants';
import {MatSidenav} from '@angular/material/sidenav';
import {MediaObserver} from '@angular/flex-layout';
import {Observable, Subscription} from 'rxjs';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class') theme = THEME;
  @ViewChild('container') private container;
  @ViewChild('drawer') drawer: MatSidenav;

  displayNav = true;
  isLoading = true;
  isLoadingRouter = false;
  isMenuOpen = true;
  isMobileView = false;
  subscription: Subscription;
  title = 'master-admin';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private media: MediaObserver,
    private router: Router,
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.isLoading = false;
    this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));
    if (this.storage.get('theme_contrast')) {
      this.theme = this.storage.get('theme_contrast');
    }
    if (this.storage.get('menu_open') !== null) {
      this.isMenuOpen = this.storage.get('menu_open');
    }
  }

  toggleAutoContraste(): void {
    this.theme = this.theme === THEME_AUTO_CONTRASTE ? THEME : THEME_AUTO_CONTRASTE;
    this.storage.set('theme_contrast', this.theme);
  }

  toggleMenu(): void {
    this.drawer.toggle();
    this.isMenuOpen = !this.isMenuOpen;
    this.storage.set('menu_open', this.isMenuOpen);
  }


  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
