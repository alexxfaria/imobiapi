import { Router } from 'express';
import userRouter from '@modules/user/routes/user.routes';
import passwordRouter from '@modules/user/routes/password.routes';
import sessionsRouter from '@modules/user/routes/sessions.routes';
import peopleRouter from '@modules/people/routes/people.routes';
import profileRouter from '@modules/user/routes/profile.routes';
import adsRouter from '@modules/ads/routes/ads.routes';
import peopleInterestRouter from '@modules/interest/routes/peopleInterest.routes';
import interestRouter from '@modules/interest/routes/interest.routes';
import interestAdsRouter from '@modules/interest/routes/interestAds.routes';
import photoAdsRouter from '@modules/ads/routes/photoAds.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/password', passwordRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/people', peopleRouter);
routes.use('/people_interest', peopleInterestRouter);
routes.use('/interest', interestRouter);
routes.use('/interest_ads', interestAdsRouter);
routes.use('/profile', profileRouter);
routes.use('/ads', adsRouter);
routes.use('/photo_ads', photoAdsRouter);

export default routes;
