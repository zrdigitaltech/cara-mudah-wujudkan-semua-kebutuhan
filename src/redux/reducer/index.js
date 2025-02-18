// reducer.js
import { combineReducers } from 'redux';

import { aboutUsReducer } from '@/redux/reducer/about-us/reducer';
import { servicesReducer } from '@/redux/reducer/services/reducer';
import { headerReducer } from '@/redux/reducer/header/reducer';
import { featuredProjectsReducer } from '@/redux/reducer/featured-projects/reducer';
import { caseStudyReducer } from '@/redux/reducer/case-study/reducer';
import { teamReducer } from '@/redux/reducer/team/reducer';
import { pricingReducer } from '@/redux/reducer/pricing/reducer';
import { partnersReducer } from '@/redux/reducer/partners/reducer';
import { latestNewsReducer } from '@/redux/reducer/latest-news/reducer';
import { contactUsReducer } from '@/redux/reducer/contact-us/reducer';
import { floatingWhatsappReducer } from '@/redux/reducer/floating-whatsapp/reducer';

// Landing Page
import { testimonialReducer } from '@/redux/reducer/testimonial/reducer';
import { bidangBisnisReducer } from '@/redux/reducer/bidang-bisnis/reducer';
import { faqReducer } from '@/redux/reducer/faq/reducer';

const rootReducer = combineReducers({
  aboutUs: aboutUsReducer,
  services: servicesReducer,
  header: headerReducer,
  featuredProjects: featuredProjectsReducer,
  caseStudy: caseStudyReducer,
  team: teamReducer,
  pricing: pricingReducer,
  partners: partnersReducer,
  latestNews: latestNewsReducer,
  contactUs: contactUsReducer,
  floatingWhatsapp: floatingWhatsappReducer,

  // Landing Page
  testimonial: testimonialReducer,
  bidangBisnis: bidangBisnisReducer,
  faq: faqReducer
});

export default rootReducer;
