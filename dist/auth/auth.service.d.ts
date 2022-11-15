import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signin(dto: AuthDto): Promise<import(".prisma/client").User>;
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
}
