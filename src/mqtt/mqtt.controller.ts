import { Controller, Get } from '@nestjs/common';
import { MqttService } from './mqtt.service';

@Controller('mqtt')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Get('send')
  sendMqttMessage() {
    this.mqttService.publish('test/topic', 'Merhaba MQTT');
    return 'Mesaj gönderildi';
  }
}
