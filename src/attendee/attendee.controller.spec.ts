import { Test, TestingModule } from '@nestjs/testing';
import { AttendeeController } from './attendee.controller';

describe('AttendeeController', () => {
  let controller: AttendeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendeeController],
    }).compile();

    controller = module.get<AttendeeController>(AttendeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
