import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
import { MqttController } from './mqtt.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://51.222.156.53:8883',
        },
      },
    ]),
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
