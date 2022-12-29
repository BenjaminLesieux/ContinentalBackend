import { Controller, Get, Res } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private service: MenuService) {}

  @Get('/')
  downloadMenu(@Res() response) {
    const file = this.service.downloadMenu();

    response.setHeader('Content-Length', file.length);
    response.write(file, 'binary');
    response.end();
  }
}
