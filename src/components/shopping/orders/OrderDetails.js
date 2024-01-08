import { Button, Select } from "@radix-ui/themes";
import React from "react";
import { PiSealWarningBold } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";
import PackagingLabel from "./PackingLabel";
import { FaClock, FaRegClock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { TfiTruck } from "react-icons/tfi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

export default function OrderDetails({ data, order }) {
  console.log(data);
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");

    // Render the packaging label component in the new window
    printWindow.document.write(
      "<html><head><title>Packaging Label</title></head><body>"
    );
    printWindow.document.write(
      "<style>/* Add your print styles here */</style>"
    );
    printWindow.document.write('<div class="print-container">');
    printWindow.document.write(
      document.getElementById("packaging-label").innerHTML
    );
    printWindow.document.write("</div></body></html>");

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
        <PackagingLabel
          billing={data.billing}
          shippingDetails={data.shippingDetails}
        />
      </div>
      <div className=" mt-10">
        <Button variant="solid" color="navyblue">
          Order Tracking
        </Button>
        <div className=" relative mt-4 flex items-center justify-between rounded-lg border-2 border-gray-600/30 p-10">
          <div className=" flex flex-col items-center justify-center">
            <h4 className=" font-bold text-sm mb-1">Order received</h4>
            <div className=" flex items-center gap-x-2">
              <FaRegClock size={12} className=" text-clr2" />
              <p>on 3:00 PM, 20-Sep-2023</p>
            </div>
            <FaClock size={18} className=" text-clr2 mt-3" />
          </div>
          <div className=" relative z-20 flex-1">
            <div className=" flex items-center  justify-center gap-x-3">
            <div className=" z-10 flex flex-col items-center justify-center">
              <h4 className=" font-bold text-sm mb-1">On the Way</h4>
              <div className=" flex items-center gap-x-2">
                <FaRegClock size={12} className=" text-clr2" />
                <p>on 3:00 PM, 20-Sep-2023</p>
              </div>
              <TfiTruck size={18} className=" text-clr2 mt-3" />
            </div>
            <Button>
            <MdOutlineRadioButtonChecked size={16} /> Tracking
            </Button>
            </div>
            <div className=" flex-1 relative -top-2 z-0 bg-clr2 h-[2px]" />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h4 className=" font-bold text-sm mb-1">Delivered</h4>
            <div className=" flex items-center gap-x-2">
              <FaRegClock size={12} className=" text-clr2" />
              <p>Finish time in 3 min.</p>
            </div>
            <FaPerson size={22} className=" text-clr2 mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
