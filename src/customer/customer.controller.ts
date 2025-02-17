import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer') // localhost:3000/customer
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get() // localhost:3000/customer/
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id') // localhost:3000/customer/id
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Get('/findonebyfullname/:fullname') // localhost:3000/customer/findonebyfullname/fullname
  findOnebyFullname(@Param('fullname') fullname: string) {
    return this.customerService.findOnebyFullname(fullname);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
