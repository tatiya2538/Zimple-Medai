import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoModule } from './service/repo.module';
import { UsersModule } from './modules/users/User.Module';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './modules/auth/Auth.module';

const modulesImport = [RepoModule, UsersModule, AuthModule];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          extra: {
            trustServerCertificate: true,
          },
        }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // ต่อกราฟ
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
      // formatError: (err) => {
      //   const envErr = process.env.APP_DEV_ERROR === 'true' ? true : false;
      //   const error = err && errorService.errorType[err.message];
      //   return error
      //     ? error
      //     : envErr
      //     ? err
      //     : errorService.errorType['BAD_REQUEST'];
      // },
    }),
    ...modulesImport,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
