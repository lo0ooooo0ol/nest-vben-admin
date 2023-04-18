import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { IAppConfig, ISwaggerConfig } from './config';
import { Pagination } from './helper/paginate/pagination';
import { ResOp, TreeResult } from './common/model/response.model';
import { AbstractEntity } from './common/entity/abstract.entity';
import { API_SECURITY_AUTH } from './decorators/swagger.decorator';

export function setupSwagger(
  app: INestApplication,
  configService: ConfigService,
): void {
  const { enable, path } = configService.get<ISwaggerConfig>('swagger');

  if (!enable) return;

  const documentBuilder = new DocumentBuilder()
    .setTitle(`${configService.get<IAppConfig>('app').name}`)
    .setDescription(`${configService.get<IAppConfig>('app').name} API document`)
    .setVersion('1.0');

  // auth security
  documentBuilder.addSecurity(API_SECURITY_AUTH, {
    description: 'Auth',
    type: 'apiKey',
    in: 'header',
    name: 'Authorization',
  });

  const document = SwaggerModule.createDocument(app, documentBuilder.build(), {
    ignoreGlobalPrefix: false,
    extraModels: [AbstractEntity, ResOp, Pagination, TreeResult],
  });

  SwaggerModule.setup(path, app, document);

  // 导入 ApiFox 忽略全局前缀
  const documentApiFox = SwaggerModule.createDocument(
    app,
    documentBuilder.build(),
    {
      ignoreGlobalPrefix: true,
      extraModels: [AbstractEntity, ResOp, Pagination, TreeResult],
    },
  );

  SwaggerModule.setup(`${path}-fox`, app, documentApiFox);

  // started log
  const logger = new Logger('SwaggerModule');
  logger.log(
    `Document running on http://127.0.0.1:${
      configService.get<IAppConfig>('app').port
    }/${path}`,
  );
}
