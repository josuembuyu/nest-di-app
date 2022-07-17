import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private poweService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from power Service');
    this.poweService.supplyPower(10);
    return a + b;
  }
}
