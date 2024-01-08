import OrdersPanel from '@/components/shopping/orders'
import Shell from '@/components/shells/Shell'
import React from 'react'

export default function OrdersPage() {
  const path = [
    {
      title: 'Dashboard',
      href: '/dashboard'
    },
    {
      title: 'Shopping',
      href: '-1',
    }
  ];

  return (
    <Shell>
      <OrdersPanel title={"Orders"} path={path} />
    </Shell>
  )
}
