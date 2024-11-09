import {HelloService} from "../services/HelloService.ts";
import { Get, Controller } from "@nestjs/common"

@Controller()
export class HelloController {
    constructor(private helloService: HelloService) {}

    @Get('/')
    hello() {
        return this.helloService.getHello();
    }
}
