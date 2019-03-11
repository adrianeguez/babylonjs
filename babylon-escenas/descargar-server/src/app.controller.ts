import {Controller, Get, Req, Res} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('descargar')
    descargar(
        @Req() request,
        @Res() response,
    ) {
        const carpetaRoles = __dirname + '/../publico/';

        response.download(carpetaRoles + 'ejemplo-basico.babylon', 'ejemplo-basico.babylon');
    }

}
