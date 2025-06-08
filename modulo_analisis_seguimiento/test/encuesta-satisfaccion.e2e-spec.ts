import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; // o módulo donde esté tu controlador

describe('EncuestaSatisfaccionController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/encuesta-satisfaccion (GET) - debería devolver un array', () => {
    return request(app.getHttpServer())
      .get('/encuesta-satisfaccion')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('/encuesta-satisfaccion (POST) - debería crear una encuesta', () => {
    const dto = {
      alquiler_id: 1,
      fecha: '2025-06-02',
      puntuacion: 4,
      comentarios: 'Muy buen servicio',
    };

    return request(app.getHttpServer())
      .post('/encuesta-satisfaccion')
      .send(dto)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id'); // o la propiedad que retorne tu servicio
        expect(res.body.puntuacion).toBe(dto.puntuacion);
      });
  });

  // Agrega más tests para PATCH, DELETE, GET/:id, etc.
});
