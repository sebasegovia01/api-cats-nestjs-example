import { BaseCatDto } from './base-cat.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCatDto extends PartialType(BaseCatDto) {}
