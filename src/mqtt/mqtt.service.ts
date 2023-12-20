import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class MqttService {
  constructor(@Inject('MQTT_SERVICE') private readonly client: ClientProxy) {}

  async publish(topic: string, message: string) {
    return this.client.emit(topic, message);
  }
}
