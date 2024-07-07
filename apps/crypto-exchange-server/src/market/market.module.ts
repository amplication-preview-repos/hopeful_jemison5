import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarketModuleBase } from "./base/market.module.base";
import { MarketService } from "./market.service";
import { MarketController } from "./market.controller";
import { MarketResolver } from "./market.resolver";

@Module({
  imports: [MarketModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarketController],
  providers: [MarketService, MarketResolver],
  exports: [MarketService],
})
export class MarketModule {}
