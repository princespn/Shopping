import {Component, Inject, LOCALE_ID, OnInit, Renderer2} from '@angular/core';
import { ConfigService } from '@vexs/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { LayoutService } from '@vexs/services/layout.service';
import {ActivatedRoute, Router} from '@angular/router';
import { SplashScreenService } from '@vexs/services/splash-screen.service';
import {  StyleService } from '@vexs/services/style.service';
import {NamedRoutesService} from '@gomcodoctor/services/route/named-routes.service';
import {AuthService} from '@gomcodoctor/services/auth';
import {NavigationItemProviderService} from '@gomcodoctor/services/route/navigation-item/navigation-item-provider.service';
import {environment} from '@environments/environment';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'vex';
  user;
  cookieMessage = 'Shopping manager want to uses cookie or similar technologies, to enhance your browsing experience and provide personalised recommendations. By continuing to use our website, you agree to our';
  cookieDismiss = 'Accept';
  cookieLinkText = 'Cookies Policy';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationItemProviderService: NavigationItemProviderService,
              private splashScreenService: SplashScreenService,
              private namedRoutesService: NamedRoutesService,
              private authService: AuthService,
              private router: Router) {
    Settings.defaultLocale = this.localeId;

    // we can change translation language using this function, it should be used where we will give option to change it.
    // translate.use('en');

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    // /**
    //  * Config Related Subscriptions
    //  * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
    //  * Example: example.com/?layout=apollo&style=default
    //  */
    // this.route.queryParamMap.pipe(
    //   map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
    // ).subscribe(isRtl => {
    //   this.document.body.dir = isRtl ? 'rtl' : 'ltr';
    //   this.configService.updateConfig({
    //     rtl: isRtl
    //   });
    // });
    //
    // this.route.queryParamMap.pipe(
    //   filter(queryParamMap => queryParamMap.has('layout'))
    // ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));
    //
    // this.route.queryParamMap.pipe(
    //   filter(queryParamMap => queryParamMap.has('style'))
    // ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    /**
     * Add your own routes here
     */
  }

  ngOnInit(): void {
    this.authService.getUser();
    this.navigationItemProviderService.emitGuestItems();

    // this.authService.user.subscribe((value) => {
    //   this.user = value;
    //   // this.navigationItemProviderService.emitGuestItems();
    // });

    const cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#164969'
        },
        button: {
          background: '#ffe000',
          text: '#164969'
        }
      },
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: '/pages/privacy-policy'
      }
    });
  }
}
