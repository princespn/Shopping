export const RoutesConfig = {
  orders_list: {
    path: 'list',
  },
  orders_detail: {
    path: 'detail/:id',
    data: {
      toolBarTitle: 'Order Detail',
    }
  },
  orders_create: {
    path: 'create',
    data: {
      toolBarTitle: 'Add Order',
    }
  },
  orders_edit: {
    path: 'edit/:id',
    data: {
      toolBarTitle: 'Edit Order',
    }
  }
};
