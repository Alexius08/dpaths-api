import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn((input: any): any => input),
  find: jest.fn((input: any): any => input),
  create: jest.fn((input: any): any => input),
  update: jest.fn((input: any): any => input),
  save: jest.fn((input: any): any => input),
  delete: jest.fn((input: any): any => input),
}));
