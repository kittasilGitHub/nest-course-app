import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerModel.create(
      createCustomerDto as Partial<Customer>,
    );
    return {
      data: customer,
      message: 'Create complete',
    };
    
    // return await this.customerModel.create(
    //   createCustomerDto as Partial<Customer>,
    // );
  }

  async findAll() {
    // findALL() from first to last
    // return await this.customerModel.findAll();

    //findALL() from last to first
    return await this.customerModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    const customer = await this.customerModel.findByPk(id);
    if (customer == null) {
      // show error message
      throw new NotFoundException('Not Found Data!!!');
    }
    return customer;
  }

  async findOnebyFullname(fullname: string) {
    return await this.customerModel.findOne({
      where: {
        fullname: fullname,
      },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
