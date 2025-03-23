/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('customer') // localhost:3000/customer
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get() // localhost:3000/customer/
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id') // localhost:3000/customer/:id
  async findOne(@Param('id') id: string) {
    const findcustomer = await this.customerService.findOne(+id);
    if (findcustomer == null) {
      // show error message
      throw new NotFoundException('Not Found Data!!!');
    }
    return findcustomer;
  }

  @Get('/findfullname/:fullname') // localhost:3000/customer/findfullname/:fullname
  async findFullname(@Param('fullname') fullname: string) {
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname == null) {
      // show error message
      throw new NotFoundException('Not Found Data!!!');
    }
    return findfullname;
  }

  @Post('/create') // localhost:3000/customer/create
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const createCustomer = await this.customerService.create(createCustomerDto);
    if (createCustomer == null) {
      throw new Error('Can not Create Data!!!');
    }
    return {
      message: 'Create Data Complete',
      data: createCustomer,
    };
  }

  @Patch('/update/:id') // localhost:3000/customer/update/:id
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,) {
    const [updateCustomer] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    console.log(updateCustomer);
    if (updateCustomer === 0) {
      throw new NotFoundException('Not Found Data to Update!!!');
    }
    return { message: 'Update Data Complete' };
  }

  @UseGuards(JwtAuthGuard) // check token
  @Delete('/delete/:id') // localhost:3000/customer/delete/:id
  async remove(@Param('id') id: string) {
    const destroyCustomer = await this.customerService.remove(+id);
    console.log(destroyCustomer);
    if (destroyCustomer == 0) {
      throw new NotFoundException('Not Found Data to Remove!!!');
    }
    return { message: 'Remove Data Complete' };
  }
}
