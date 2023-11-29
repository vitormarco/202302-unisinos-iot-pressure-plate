export enum TopicsEnum {
  left = 'vam_topic_unisinos_lfoot',
  right = 'vam_topic_unisinos_rfoot'
}

import { uniqueString } from '@/utils/uniqueString';

export const CLIENT_ID = 'mqttjs_' + uniqueString();
export const HOST = 'wss://broker.emqx.io:8084/mqtt';
export const PROTOCOL_ID = 'MQTT';

export const WIFI = {
  username: 'Wokwi-GUEST',
  password: ''
};
