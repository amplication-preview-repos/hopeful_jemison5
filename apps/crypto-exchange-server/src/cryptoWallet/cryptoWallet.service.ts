import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoWalletServiceBase } from "./base/cryptoWallet.service.base";

@Injectable()
export class CryptoWalletService extends CryptoWalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
