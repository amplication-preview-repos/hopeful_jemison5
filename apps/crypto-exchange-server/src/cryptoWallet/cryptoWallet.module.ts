import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CryptoWalletModuleBase } from "./base/cryptoWallet.module.base";
import { CryptoWalletService } from "./cryptoWallet.service";
import { CryptoWalletController } from "./cryptoWallet.controller";
import { CryptoWalletResolver } from "./cryptoWallet.resolver";

@Module({
  imports: [CryptoWalletModuleBase, forwardRef(() => AuthModule)],
  controllers: [CryptoWalletController],
  providers: [CryptoWalletService, CryptoWalletResolver],
  exports: [CryptoWalletService],
})
export class CryptoWalletModule {}
