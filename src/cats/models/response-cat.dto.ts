import { ApiProperty } from '@nestjs/swagger';

class OwnerResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  contact: string;
}

class MedicalRecordResponse {
  @ApiProperty()
  date: string;

  @ApiProperty()
  vaccine: string;
}

export class CatResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  color: string;

  @ApiProperty({ type: OwnerResponse })
  owner: OwnerResponse;

  @ApiProperty()
  vaccinated: boolean;

  @ApiProperty({ type: [MedicalRecordResponse] })
  medical_records: MedicalRecordResponse[];

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}

export class CatsListResponse {
  @ApiProperty({ type: [CatResponse] })
  cats: CatResponse[];
}
