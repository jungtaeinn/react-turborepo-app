import { Env, Config } from '../types';
import { envConfig as dev } from '@/common/config/envs/dev';
import { envConfig as qa } from '@/common/config/envs/qa';
import { envConfig as beta } from '@/common/config/envs/beta';
import { envConfig as prd } from '@/common/config/envs/prd';

/**
 * 환경변수 설정객체를 관리하는 설정
 */
export const configs: { [K in Env]: Config } = { dev, qa, beta, prd };
