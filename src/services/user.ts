import Constant from '@/utils/constant';
import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  // return request(`${Constant.baseUrl}/api/currentUser`);
  return request(`${Constant.baseUrl}/getInfo`);
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
