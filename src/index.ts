import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/s24-api-framework'
import { CS571FeaturedSaleItemRoute } from './routes/featured-sale-item';

console.log("Welcome to HW1!");

const app: Express = express();

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

appBundle.router.addRoutes([
  new CS571FeaturedSaleItemRoute()
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
