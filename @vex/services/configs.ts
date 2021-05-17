import { mergeDeep } from '../utils/merge-deep';
import { ConfigName } from '../interfaces/config-name.model';
import { Config } from '../interfaces/config.model';

const defaultConfig: Config = {
  id: ConfigName.apollo,
  name: 'Apollo',
  // imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  imgSrc: '',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'Shopping Manager',
    imageUrl: 'assets/img/small-logo.png',
    showCollapsePin: true,
    state: 'expanded'
  },
  toolbar: {
    fixed: true
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: true,
    fixed: true
  }
};

export const configs: Config[] = [
  defaultConfig,
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.hermes,
    name: 'Hermes',
    // imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    imgSrc: '',
    layout: 'vertical',
    boxed: true,
    toolbar: {
      fixed: false
    },
    footer: {
      fixed: false
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.admin,
    name: 'Ares',
    // imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
    imgSrc: '',
    boxed: true,
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.zeus,
    name: 'Zeus',
    // imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    imgSrc: '',
    sidenav: {
      // state: 'collapsed'
    },
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.ikaros,
    name: 'Ikaros',
    // imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    imgSrc: '',
    layout: 'vertical',
    boxed: true,
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  })
];
