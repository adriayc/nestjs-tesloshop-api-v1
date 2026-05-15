import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'How many rows do you need to return?',
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Type(() => Number) // Convert to number (enableImplicitConversions)
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'How many rows do you want to skip?',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number) // Convert to number (enableImplicitConversions)
  offset?: number;
}
