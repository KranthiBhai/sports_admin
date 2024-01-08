"use client";

import TitleHeader from "@/components/ui/TitleHeader";
import { OrdersData, SingleOrderData } from "@/modal/data";
import { Table } from "@radix-ui/themes";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import OrderDetails from "./OrderDetails";

export default function OrdersPanel({ title, path }) {
  const [search, setSearch] = useState();
  const [active, setActive] = useState({
    id: "",
    status: false,
  });
  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className=" w-full h-full flex flex-col mt-6">
      <TitleHeader title={title} path={path} onSearch={handleSearch} />

      <div className=" bg-white rounded-md p-4 m-4">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Order</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Total</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {OrdersData.map((item, index) => {
              return (
                <>
                  <Table.Row
                    key={index}
                    onClick={() =>
                      setActive({
                        id: item?.orderId,
                        status:
                          active.id === item.orderId ? !active.status : true,
                      })
                    }
                    className={`${" cursor-pointer hover:bg-clr1/10"} ${active.id === item.orderId && active.status && 'bg-clr1/10'}`}
                  >
                    <Table.RowHeaderCell>
                      <div className=" flex gap-x-4 items-center">
                        {active.id === item.orderId && active.status ? (
                          <FaMinus size={14} color="red" />
                        ) : (
                          <FaPlus size={14} color="green" />
                        )}
                        {item.name}
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell>{item.amount} </Table.Cell>
                  </Table.Row>
                  {active.status && item.orderId === active.id && (
                    <Table.Row >
                      <Table.Cell colSpan={4}><OrderDetails order={item} data={SingleOrderData} /></Table.Cell>
                    </Table.Row>
                  )}
                </>
              );
            })}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
