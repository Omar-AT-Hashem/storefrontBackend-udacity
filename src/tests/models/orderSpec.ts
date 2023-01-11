import { Order } from '../../models/order';

const testOrder = new Order();

describe('Order Model', () => {
  it('create method should be defined', () => {
    expect(testOrder.create).toBeDefined();
  });

  it('show user order method should be defined', () => {
    expect(testOrder.showOrderWithProducts).toBeDefined();
  });

  it('show completed orders method should be defined', () => {
    expect(testOrder.showUserCompletedOrders).toBeDefined();
  });

  it('show completed orders method should return completed orders with products', async () => {
    const completedOrders = await testOrder.showUserCompletedOrders(1);
    expect(completedOrders).toBeDefined();
  });
});
