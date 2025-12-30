import React, { useRef, useEffect, useState } from "react";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";
import { Button } from "@mui/material";
import Badge from "../../Components/Badge/Badge";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";




const Orders = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOrder = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ===== SCROLL + RED BAR REFS ===== */
  const scrollRef = useRef(null);
  const barRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  /* ===== RED BAR DRAG LOGIC ===== */
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      const scrollEl = scrollRef.current;
      const barEl = barRef.current;

      const dx = e.clientX - startX.current;
      const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
      const trackWidth = scrollEl.clientWidth - barEl.offsetWidth;

      const scrollMove = (dx / trackWidth) * maxScroll;
      scrollEl.scrollLeft = startScroll.current + scrollMove;

      const ratio = scrollEl.scrollLeft / maxScroll || 0;
      barEl.style.transform = `translateX(${ratio * trackWidth}px)`;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "auto";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onBarMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = scrollRef.current.scrollLeft;
    document.body.style.userSelect = "none";
  };

  return (
    <section style={{ padding: "40px 0", width: "100%" }}>
      <div className="container" style={{ display: "flex", gap: 20 }}>
        {/* SIDEBAR */}
        <div style={{ width: "20%" }}>
          <AccountSidebar />
        </div>

        {/* CONTENT */}
        <div style={{ width: "80%" }}>
          <div style={card}>
            <h2 style={{ fontSize: 16, fontWeight: 600 }}>My Orders</h2>

            <p style={{ marginBottom: 15 }}>
              There are <span style={{ color: "red", fontWeight: 600 }}>2</span>{" "}
              Orders
            </p>

            {/* ===== SCROLL CONTAINER ===== */}
            <div ref={scrollRef} style={scrollBox}>
              <table style={table}>
                <thead>
                  <tr style={thead}>
                    <th></th>
                    <th style={thStyle}>Order Id</th>
                    <th style={thStyle}>Payment Id</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Phone</th>
                    <th style={thStyle}>Address</th>
                    <th style={thStyle}>Pincode</th>
                    <th style={thStyle}>Amount</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>User Id</th>
                    <th style={thStyle}>Order Status</th>
                    <th style={thStyle}>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {/* ===== MAIN ROW ===== */}
                  <tr>
                    <td style={tdStyle}>
                      <Button style={iconBtn} onClick={() => toggleOrder(0)}>
                        <Button style={iconBtn} onClick={() => toggleOrder(0)}>
                          {openIndex === 0 ? <FaAngleUp /> : <FaAngleDown />}
                        </Button>
                      </Button>
                    </td>

                    <td style={tfStyle} className="text-red-400">
                      24122002
                    </td>
                    <td className="text-red-400" style={tfStyle}>pay_01</td>
                    <td style={tdStyle}>Kishor</td>
                    <td style={tdStyle}>875421562</td>
                    <td style={{ ...tdStyle, minWidth: 200 }}>
                      GPA mahal, balan nagar, Allinagaram, Theni
                    </td>
                    <td style={tdStyle}>625531</td>
                    <td style={tdStyle}>600</td>
                    <td style={tdStyle}>kishor451817@gmail.com</td>
                    <td style={tdStyle}>98765</td>
                    <td style={tdStyle}>
                      <Badge status="pending" />
                    </td>
                    <td style={tdStyle}>28-04-2024</td>
                  </tr>

                  {/* ===== CHILD TABLE ===== */}
                  {openIndex === 0 && (
                    <tr>
                      <td colSpan="14" style={childWrapper}>
                        <table style={childTable}>
                          <thead>
                            <tr style={thead}>
                              <th style={{ ...thStyle, width: 140 }}>
                                Product Id
                              </th>
                              <th
                                style={{
                                  ...thStyle,
                                  width: 220,
                                  textAlign: "left",
                                }}
                              >
                                Product Title
                              </th>
                              <th style={{ ...thStyle, width: 100 }}>Image</th>
                              <th style={{ ...thStyle, width: 80 }}>Qty</th>
                              <th style={{ ...thStyle, width: 100 }}>Price</th>
                              <th style={{ ...thStyle, width: 120 }}>
                                SubTotal
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td className="text-gray-800" style={{ ...tfStyle, width: 120 }}>
                                24122002
                              </td>

                              <td
                                style={{
                                  ...tdStyle,
                                  width: 300,
                                  textAlign: "left",
                                }}
                              >
                                A line kurti with sharara
                              </td>

                              <td style={{ ...tdStyle, width: 100 }}>
                                <img
                                  src="https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
                                  alt=""
                                  style={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: 6,
                                    objectFit: "cover",
                                    display: "block",
                                    margin: "0 auto",
                                  }}
                                />
                              </td>

                              <td style={{ ...tdStyle, width: 80 }}>2</td>
                              <td style={{ ...tdStyle, width: 100 }}>650</td>
                              <td style={{ ...tdStyle, width: 120 }}>1300</td>
                            </tr>

                            <tr>
                              <td style={{ ...tfStyle, width: 120 }}>
                                <span className="text-gray-800">
                                  24122002
                                  </span>
                              </td>

                              <td
                                style={{
                                  ...tdStyle,
                                  width: 300,
                                  textAlign: "left",
                                }}
                              >
                                A line kurti with sharara
                              </td>

                              <td style={{ ...tdStyle, width: 100 }}>
                                <img
                                  src="https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
                                  alt=""
                                  style={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: 6,
                                    objectFit: "cover",
                                    display: "block",
                                    margin: "0 auto",
                                  }}
                                />
                              </td>

                              <td style={{ ...tdStyle, width: 80 }}>2</td>
                              <td style={{ ...tdStyle, width: 100 }}>650</td>
                              <td style={{ ...tdStyle, width: 120 }}>1300</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ===== RED SCROLL BAR ===== */}
            <div style={barTrack}>
              <div ref={barRef} style={bar} onMouseDown={onBarMouseDown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== STYLES ===== */

const card = {
  background: "#fff",
  borderRadius: 6,
  padding: 20,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const scrollBox = {
  overflow: "hidden",
};

const table = {
  minWidth: 1600, // ✅ parent table only
  borderCollapse: "collapse",
  fontSize: 13,
};

const childTable = {
  width: "20%", // ✅ child table fixed
  tableLayout: "fixed",
  borderCollapse: "collapse",
  fontSize: 13,
};

const thead = {
  background: "#F4F7FA",
  color: "#4A4F55",
};

const thStyle = {
  padding: "14px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  textAlign: "center",
  verticalAlign: "middle",
};

const tdStyle = {
  padding: "14px",
  whiteSpace: "nowrap",
  color: "#555",
  textAlign: "center",
  verticalAlign: "middle",
};

const childWrapper = {
  background: "#f1f1f1",
  paddingLeft: 60,
};

const iconBtn = {
  width: 35,
  height: 35,
  minWidth: 35,
  borderRadius: "50%",
  background: "#f1f1f1",
};

const barTrack = {
  marginTop: 12,
  height: 5,
  background: "#e0e0e0",
  borderRadius: 5,
  position: "relative",
};

const bar = {
  width: 120,
  height: "100%",
  background: "#FF5A3C",
  borderRadius: 5,
  cursor: "default",
};

const tfStyle = {
  padding: "14px",
  whiteSpace: "nowrap",
  
  textAlign: "center",
  verticalAlign: "middle",
};

export default Orders;
