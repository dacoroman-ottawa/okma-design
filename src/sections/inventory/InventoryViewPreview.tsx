import inventoryData from '@/../product/sections/inventory/data.json'
import { InventoryView } from './components/InventoryView'

export default function InventoryViewPreview() {
  return (
    <InventoryView
      products={inventoryData.products}
      suppliers={inventoryData.suppliers}
      customers={inventoryData.customers}
      rentals={inventoryData.rentals}
      sales={inventoryData.sales}
      onViewProduct={(id) => console.log('View product:', id)}
      onEditProduct={(id) => console.log('Edit product:', id)}
      onDeleteProduct={(id) => console.log('Delete product:', id)}
      onAddProduct={() => console.log('Add product')}
      onViewSupplier={(id) => console.log('View supplier:', id)}
      onEditSupplier={(id) => console.log('Edit supplier:', id)}
      onDeleteSupplier={(id) => console.log('Delete supplier:', id)}
      onAddSupplier={() => console.log('Add supplier')}
      onViewCustomer={(id) => console.log('View customer:', id)}
      onEditCustomer={(id) => console.log('Edit customer:', id)}
      onDeleteCustomer={(id) => console.log('Delete customer:', id)}
      onAddCustomer={() => console.log('Add customer')}
      onViewRental={(id) => console.log('View rental:', id)}
      onReturnRental={(id) => console.log('Return rental:', id)}
      onCreateRental={() => console.log('Create rental')}
      onViewSale={(id) => console.log('View sale:', id)}
      onRecordSale={() => console.log('Record sale')}
    />
  )
}
