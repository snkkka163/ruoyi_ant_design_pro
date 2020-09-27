import Constant from '@/utils/constant';
import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  params['uuid'] = localStorage.getItem('uuid')
  return request(`${Constant.baseUrl}/login`, {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

/**
 * 获取验证码图片数据
 */
export function getCode(){
  return request(`${Constant.baseUrl}/captchaImage`,{
    method: 'GET',
  })
}
