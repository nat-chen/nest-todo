"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const swagger_1 = require("@nestjs/swagger");
const startSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('待办事项')
        .setDescription('nest-todo 的 API 文档')
        .setVersion('1.0')
        .addTag('todo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    startSwagger(app);
    await app.listen(8888);
}
bootstrap();
//# sourceMappingURL=main.js.map