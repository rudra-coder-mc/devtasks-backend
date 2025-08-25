import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async register(email: string, password: string) {

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { email, password: hashedPassword }
    })

    return { id: user.id, email: user.email }
  }

  async login(email: string, password: string) {

    const user = await this.prisma.user.findUnique({ where: { email } })

    if (!user) throw new UnauthorizedException('Invalid credentials')

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) throw new UnauthorizedException('Invalid credentials')

    const token = this.jwtService.sign({ sub: user.id, email: user.email })

    return { access_token: token }

  }
}
