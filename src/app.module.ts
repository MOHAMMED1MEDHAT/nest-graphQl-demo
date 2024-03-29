import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsModule } from './configs/configs.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
	imports: [
		ConfigsModule,
		TypeOrmModule.forRoot({
			type: 'mongodb',
			url: process.env.MONGO_URI,
			synchronize: true,
			useUnifiedTopology: true,
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: true,
			driver: ApolloDriver,
		}),
		LessonModule,
	],
})
export class AppModule {}
