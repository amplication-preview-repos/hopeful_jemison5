import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CryptoWalletResolverBase } from "./base/cryptoWallet.resolver.base";
import { CryptoWallet } from "./base/CryptoWallet";
import { CryptoWalletService } from "./cryptoWallet.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CryptoWallet)
export class CryptoWalletResolver extends CryptoWalletResolverBase {
  constructor(
    protected readonly service: CryptoWalletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
