// components/PackagingLabel.js
import { Table } from "@radix-ui/themes";
import React from "react";

const PackagingLabel = ({ billing, shippingDetails }) => {
  return (
    <div
      className="packaging-label"
      style={{
        marginTop: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 0,
              }}
            >
              Billing details
            </h4>
            <p
              style={{
                marginTop: 10,
              }}
            >
              {billing.name}, {billing.address}
            </p>
            <div className=" mt-4">
              <ul
                style={{
                  padding: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    sodham123@gmail.com
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Phone
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    9949423448
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Payment Via
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Cash On Delivery
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Date Created
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    2022-05-10 15:30
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: 30,
            }}
          >
            <h4
              style={{
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 0,
              }}
            >
              Shipping details
            </h4>
            <p
              style={{
                marginTop: 10,
              }}
            >
              {shippingDetails.name}, {shippingDetails.address}
            </p>
            <div className=" mt-4">
              <ul
                style={{
                  padding: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Shipping Method
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    Free Shipping
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    height: 30,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 500,
                      width: 150,
                    }}
                  >
                    Delivery Date
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {shippingDetails.createdAt}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Cost</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Total</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row className=" border">
                <Table.RowHeaderCell>Cricket Bat</Table.RowHeaderCell>
                <Table.Cell>₹ 150/-</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>₹ 150/-</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
          <div className=" mt-10">
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  listStyle: "none",
                  height: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Items SubTotal
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    marginLeft: 20,
                  }}
                >
                  ₹ 150/-
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  listStyle: "none",
                  height: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Shipping
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    marginLeft: 20,
                  }}
                >
                  ₹ 0.00/-
                </p>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  listStyle: "none",
                  height: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Order Total
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    marginLeft: 20,
                  }}
                >
                  ₹ 150/-
                </p>
              </li>
            </ul>
            <div>
                <hr style={{
                    border: '1px solid black',
                    marginTop: 10,
                }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Paid
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    marginLeft: 20,
                  }}
                >
                  ₹ 150/-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingLabel;
