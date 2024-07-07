import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarketService } from "./market.service";
import { MarketControllerBase } from "./base/market.controller.base";

@swagger.ApiTags("markets")
@common.Controller("markets")
export class MarketController extends MarketControllerBase {
  constructor(
    protected readonly service: MarketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
