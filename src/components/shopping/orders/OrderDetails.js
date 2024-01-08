import { Button, Select } from "@radix-ui/themes";
import React from "react";
import { PiSealWarningBold } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";
import PackagingLabel from "./PackingLabel";

export default function OrderDetails({ data, order }) {
  console.log(data);
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    // Render the packaging label component in the new window
    printWindow.document.write('<html><head><title>Packaging Label</title></head><body>');
    printWindow.document.write('<style>/* Add your print styles here */</style>');
    printWindow.document.write('<div class="print-container">');
    printWindow.document.write(document.getElementById('packaging-label').innerHTML);
    printWindow.document.write('</div></body></html>');

    printWindow.print();
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  };

  return (
    <div className=" w-full px-10 py-4 relative bg-clrbg rounded-md">
      <div className=" flex items-center justify-between">
        <div className=" flex gap-x-4">
          <h4>
            {"Order "} {data.orderId}
          </h4>

          <div className=" w-fit customSelect">
            <Select.Root defaultValue={order.status} className=" w-full">
              <Select.Trigger />
              <Select.Content position="popper">
                <Select.Item value="completed">Completed</Select.Item>
                <Select.Item value="processing">Processing</Select.Item>
                <Select.Item value="cancel">Cancel</Select.Item>
              </Select.Content>
            </Select.Root>
            <div className=" flex items-center gap-x-2 mt-1">
              <PiSealWarningBold size={18} color="blue" />
              <p className=" text-[10px] font-medium">
                You can set the order's status here.
              </p>
            </div>
          </div>
        </div>

        <Button color="indigo" variant="soft" onClick={handlePrint}>
        <LuPrinter size={14} />
          Print Packing Label
        </Button>
      </div>
      <div id="packaging-label">
        <PackagingLabel billing={data.billing} shippingDetails={data.shippingDetails} />
      </div>
    </div>
  );
}
