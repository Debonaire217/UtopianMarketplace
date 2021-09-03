import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';
import { MarketComponent } from './market/market.component';
import { NftCreatorComponent } from './nft-creator/nft-creator.component';
import { TradingComponent } from './trading/trading.component';

const routes: Routes = [
  {path: 'market', component: MarketComponent},
  {path: 'trading', component: TradingComponent},
  {path: 'nft-creator', component: NftCreatorComponent},
  {path: 'land', component: LandComponent},
  {path: '', redirectTo: '/market', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
