import { Router } from 'express';
import peopleRouter from '../../../modules/people/routes/people.routes';
import sessionsRouter from '@modules/people/routes/sessions.routes';
import passwordRouter from '@modules/people/routes/password.routes';
import profileRouter from '@modules/people/routes/profile.routes';
import adsRouter from '@modules/ads/routes/ads.routes';
import peopleInterestRouter from '@modules/interest/routes/peopleInterest.routes';
import interestRouter from '@modules/interest/routes/interest.routes';
import interestAdsRouter from '@modules/interest/routes/interestAds.routes';
import photoAdsRouter from '@modules/ads/routes/photoAds.routes';

const routes = Router();

routes.use('/people', peopleRouter);
routes.use('/people_interest', peopleInterestRouter);
routes.use('/interest', interestRouter);
routes.use('/interest_ads', interestAdsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/ads', adsRouter);
routes.use('/photo_ads', photoAdsRouter);

export default routes;
