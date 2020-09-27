import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CourseEntity } from './course.entity';
import { CourseDto } from './course.dto';
import { ID } from '../shared/models/id.model';
import { DeleteResponse } from '../shared/models/delete-response.model';

@Injectable()
export class CourseService {
  constructor(@InjectRepository(CourseEntity) private courseRepository: Repository<CourseEntity>) {}

  async getCourses(): Promise<CourseEntity[]> {
    return this.courseRepository.find();
  }

  async createCourse(data: CourseDto): Promise<CourseEntity> {
    const course = this.courseRepository.create(data);
    await this.courseRepository.save(course);
    return course;
  }

  async getCourse(courseId: ID): Promise<CourseEntity> {
    const course = await this.courseRepository.findOne({ where: { courseId } });
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  async updateCourse(courseId: ID, data: CourseDto): Promise<CourseEntity> {
    const course = await this.courseRepository.findOne({ where: { courseId } });
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    await this.courseRepository.update({ courseId }, data);
    return this.courseRepository.findOne({ where: { courseId } });
  }

  async deleteCourse(courseId: ID): Promise<DeleteResponse> {
    const course = await this.courseRepository.findOne({ where: { courseId } });
    if (!course) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    await this.courseRepository.delete({ courseId });
    return { deleted: true, id: courseId };
  }
}
