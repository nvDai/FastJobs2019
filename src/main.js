import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element UI
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/vi'

// Vue Particles
import VueParticles from 'vue-particles'

// Font Awesome
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
  faBuilding,
  faIdCard,
  faEnvelope,
  faClipboard,
  faCheckCircle,
  faDotCircle,
  faCopyright
} from '@fortawesome/free-regular-svg-icons'

import {
  faHome,
  faBriefcase,
  faFileInvoiceDollar,
  faUserTie,
  faMapMarkerAlt,
  faDollarSign,
  faUserClock,
  faChevronDown,
  faChevronUp,
  faLock,
  faPhone,
  faKey,
  faSearch,
  faClock,
  faUser,
  faHeart,
  faComment,
  faPrint,
  faTable,
  faShareAlt,
  faStar,
  faExclamationTriangle,
  faHotel,
  faClipboardList,
  faTransgender,
  faGlobeAsia,
  faSchool,
  faBook,
  faSignInAlt,
  faDoorOpen,
  faCheck,
  faCar,
  faPhoneSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHome,
  faBriefcase,
  faIdCard,
  faBuilding,
  faFileInvoiceDollar,
  faUserTie,
  faMapMarkerAlt,
  faDollarSign,
  faUserClock,
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faLock,
  faPhone,
  faKey,
  faSearch,
  faClock,
  faUser,
  faHeart,
  faComment,
  faPrint,
  faTable,
  faShareAlt,
  faClipboard,
  faStar,
  faExclamationTriangle,
  faHotel,
  faClipboardList,
  faTransgender,
  faGlobeAsia,
  faSchool,
  faBook,
  faFacebookF,
  faGoogle,
  faTwitter,
  faInstagram,
  faSignInAlt,
  faDoorOpen,
  faCheckCircle,
  faCheck,
  faDotCircle,
  faCar,
  faPhoneSquare,
  faLinkedinIn,
  faCopyright,
  faGithub
)

config.autoAddCss = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Element, { locale })
Vue.use(VueParticles)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
