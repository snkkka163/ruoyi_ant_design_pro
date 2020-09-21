import Constant from '@/utils/constant';
import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
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
export async function getCode(){
  return request(`${Constant.baseUrl}/captchaImage`,{
    method: 'GET',
  })
}