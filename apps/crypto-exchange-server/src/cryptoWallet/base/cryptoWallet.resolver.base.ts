/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CryptoWallet } from "./CryptoWallet";
import { CryptoWalletCountArgs } from "./CryptoWalletCountArgs";
import { CryptoWalletFindManyArgs } from "./CryptoWalletFindManyArgs";
import { CryptoWalletFindUniqueArgs } from "./CryptoWalletFindUniqueArgs";
import { CreateCryptoWalletArgs } from "./CreateCryptoWalletArgs";
import { UpdateCryptoWalletArgs } from "./UpdateCryptoWalletArgs";
import { DeleteCryptoWalletArgs } from "./DeleteCryptoWalletArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { CryptoWalletService } from "../cryptoWallet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CryptoWallet)
export class CryptoWalletResolverBase {
  constructor(
    protected readonly service: CryptoWalletService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "read",
    possession: "any",
  })
  async _cryptoWalletsMeta(
    @graphql.Args() args: CryptoWalletCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CryptoWallet])
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "read",
    possession: "any",
  })
  async cryptoWallets(
    @graphql.Args() args: CryptoWalletFindManyArgs
  ): Promise<CryptoWallet[]> {
    return this.service.cryptoWallets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CryptoWallet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "read",
    possession: "own",
  })
  async cryptoWallet(
    @graphql.Args() args: CryptoWalletFindUniqueArgs
  ): Promise<CryptoWallet | null> {
    const result = await this.service.cryptoWallet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CryptoWallet)
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "create",
    possession: "any",
  })
  async createCryptoWallet(
    @graphql.Args() args: CreateCryptoWalletArgs
  ): Promise<CryptoWallet> {
    return await this.service.createCryptoWallet({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CryptoWallet)
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "update",
    possession: "any",
  })
  async updateCryptoWallet(
    @graphql.Args() args: UpdateCryptoWalletArgs
  ): Promise<CryptoWallet | null> {
    try {
      return await this.service.updateCryptoWallet({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CryptoWallet)
  @nestAccessControl.UseRoles({
    resource: "CryptoWallet",
    action: "delete",
    possession: "any",
  })
  async deleteCryptoWallet(
    @graphql.Args() args: DeleteCryptoWalletArgs
  ): Promise<CryptoWallet | null> {
    try {
      return await this.service.deleteCryptoWallet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: CryptoWallet,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}