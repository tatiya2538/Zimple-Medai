import { Injectable } from '@nestjs/common';

@Injectable()
export default class ErrorService {
  errorRespone(errorMessage: string, error: string): any {
    const throwMgs = errorMessage
      ? errorMessage
      : error['message']
      ? error['message']
      : null;
    throw new Error(throwMgs);
  }
}
