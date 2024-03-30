import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

class Owner {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contact: string;
}

class MedicalRecord {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vaccine: string;
}

export class BaseCatDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  breed: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({ type: Owner })
  owner: Owner;

  @ApiProperty()
  @IsBoolean()
  vaccinated: boolean;

  @ApiProperty({ type: [MedicalRecord] })
  medical_records: MedicalRecord[];
}
