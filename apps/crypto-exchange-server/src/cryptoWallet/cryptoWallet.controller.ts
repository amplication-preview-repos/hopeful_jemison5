import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CryptoWalletService } from "./cryptoWallet.service";
import { CryptoWalletControllerBase } from "./base/cryptoWallet.controller.base";

@swagger.ApiTags("cryptoWallets")
@common.Controller("cryptoWallets")
export class CryptoWalletController extends CryptoWalletControllerBase {
  constructor(
    protected readonly service: CryptoWalletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
