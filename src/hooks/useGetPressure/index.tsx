import { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import { CLIENT_ID, HOST, PROTOCOL_ID, TopicsEnum, WIFI } from './helpers';
import { PressureType } from './types';

const useGetPressure = () => {
  const [pressure, setPressure] = useState<PressureType>({
    left: 1,
    right: 1
  });

  useEffect(() => {
    const setupPressure = () => {
      const mqttClient = mqtt.connect(HOST, {
        clientId: CLIENT_ID,
        username: WIFI.username,
        password: WIFI.password,
        protocolId: PROTOCOL_ID
      });

      mqttClient.on('connect', () => {
        mqttClient.subscribe(TopicsEnum.left);
        mqttClient.subscribe(TopicsEnum.right);
      });

      mqttClient.on('message', (topic, message) => {
        if (topic === TopicsEnum.left) {
          setPressure((oldPressure) => ({ ...oldPressure, left: Number(message.toString()) }));
        }
        if (topic === TopicsEnum.right) {
          setPressure((oldPressure) => ({ ...oldPressure, right: Number(message.toString()) }));
        }
      });
    };

    setupPressure();
  }, []);

  return pressure;
};

export default useGetPressure;
