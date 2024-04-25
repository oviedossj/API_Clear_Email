import YAML from 'yamljs';
import { config } from '@shared/index';
import { ErrorDetail } from '@shared/interface/haddler';
import { Request, Response, NextFunction } from 'express';

const errors = YAML.load(config.DIR_ERRORS);

export async function createError(errorKey: string): Promise<ErrorDetail> {
  const errorDetail: ErrorDetail = errorKey.split('.').reduce((acc, key) => acc[key], errors);
  if (!errorDetail) {
    return {
      key: 'internal_error',
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An internal error occurred.',
      status: 500,
    };
  }

  return errorDetail;
}

export async function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err) {
    const error:ErrorDetail = typeof err === 'string' ? await createError(err) : err;
    res.status(error.status||500).json({
      error: {
        key: error.key,
        code: error.code,
        message: error.message,
      },
    });
  } else {
    next();
  }
}

