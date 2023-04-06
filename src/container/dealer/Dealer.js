import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Table, Button, Modal, TextField } from "../../components/elements";
import {
  ChevronDown,
  CaretDownFill,
  ListUl,
  ChatDots,
  Facebook,
} from "react-bootstrap-icons";
import DowJones from "../../assets/images/dowjones.png";
import CNBC from "../../assets/images/cnbc.png";
import PDF from "../../assets/images/pdf.png";
import Excel from "../../assets/images/excel.png";

import { Select } from "antd";
import Tresmark from "../../assets/images/tresmark.png";
import "./Dealer.css";

const Dealer = () => {
  const [show, setShow] = useState(false);

  //view modal for client
  const [viewModal, setViewModal] = useState(false);

  //for buy modal for client
  const [buyModal, setBuyModal] = useState(false);

  //for sell modal for client
  const [sellModal, setSellModal] = useState(false);

  //for left table option state
  const [currentTable, setCurrentTable] = useState(1);

  //for right table option state
  const [currentRightTable, setCurrentRightTable] = useState(3);

  //for LEFT columns states in table
  const [isTbills, setIsTbills] = useState(true);
  const [isPib, setIsPib] = useState(false);
  const [isPibFloater, setIsPibFloater] = useState(false);
  const [isSukuk, setIsSukuk] = useState(false);

  // for RIGHT columns states
  const [isRightTbills, setIsRightTbills] = useState(true);
  const [isRightPib, setIsRightPib] = useState(false);
  const [isPibRightFloater, setIsPibRightFloater] = useState(false);
  const [isRightSukuk, setIsRightSukuk] = useState(false);

  //for bottom outstanding table
  const [isTxn, setIsTxn] = useState(true);
  const [isOutstanding, setIsOutstanding] = useState(false);

  // for bottom button export file toggle
  const [isExport, setIsExport] = useState(false);

  // fro another recent quote select panel
  const [isRecent, setIsRecent] = useState(true);

  // for another PKRV select panel
  const [isPkrv, setIsPkrv] = useState(false);

  // data for rows for first table
  const data = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3m",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      inventory: 1000000,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "3m",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      inventory: 1000000,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "6m",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
    },
  ];

  // data for rows for first table
  const Pibdata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "5Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "10Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "3Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      inventory: 1000000,
      Coupon: 16,
    },
  ];

  // data for rows for first table
  const PibFloaterdata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.43,
      dtm: "ewew",
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "2Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "10Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "5Y",
      bid: 232,
      offer: 15.72,
      dtm: "ewew",
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
  ];

  // for Tbills filter data
  const [filteredData, setFilteredData] = useState(data);

  // for Pib filter data
  const [pibFilter, setPibFilter] = useState(Pibdata);

  // for pib floater filter data
  const [pibFloaterFilter, setIsPibFloaterFilter] = useState(PibFloaterdata);

  // for tbills filter handler
  const handleFilter = (tenor) => {
    // console.log(tenor, "filteredfiltered");
    // console.log(data, "filteredfiltered");
    const filtered = data.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    // console.log(filtered, "filteredfiltered");
    setFilteredData(filtered);
  };

  // for pib filter handler
  const pibHandleFilter = (tenor) => {
    const filtered = Pibdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setPibFilter(filtered);
  };

  // for pib Floater filter handler
  const pibFloaterHandleFilter = (tenor) => {
    const filtered = PibFloaterdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase()
    );
    setIsPibFloaterFilter(filtered);
  };

  // data for PKRV panel table columns for table
  const PkrvPanelcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: "maturity",
      key: "maturity",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      align: "center",
      width: "100px",
      ellipsis: true,
      filters: [
        {
          text: "1Y",
          value: "1",
        },
        {
          text: "6M",
          value: "2",
        },
        {
          text: "3M",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Instrument</label>,
      dataIndex: "instrument",
      key: "instrument",
      width: "100px",
      ellipsis: true,
    },
    {
      title: <label className="table-all-title">PKRV</label>,
      dataIndex: "pkrv",
      key: "pkrv",
      width: "100px",
      // render: (text) => (
      //   <Button
      //     text={text}
      //     onClick={openSellModal}
      //     className="offer-text-button"
      //   />
      // ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      key: "Coupon",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Frequency</label>,
      dataIndex: "couponfrequency",
      key: "couponfrequency",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Bid Spread</label>,
      dataIndex: "bidspread",
      key: "bidspread",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Offer Spread</label>,
      dataIndex: "offerspread",
      key: "offerspread",
      width: "100px",
    },
  ];

  // data for rows for first table
  const PkrvPaneldata = [
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: "3m",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: "2m",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: "1",
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: "1Y",
      instrument: "PIB",
      pkrv: 15.72,
      dtm: "ewew",
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
  ];

  // Filter Options for left table
  const tableFilterOptions = [
    { className: "filter-color", label: "Recent Quotes", value: 1 },
    {
      className: "filter-color",
      label: "PKRV Derived bond",
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
    { className: "filter-color", label: "News", value: 3 },
  ];

  //filter options for right table
  const rightTableOption = [
    { className: "filter-color", label: "Recent Quotes", value: 1 },
    {
      className: "filter-color",
      label: "PKRV Derived bond",
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
    { className: "filter-color", label: "News", value: 3 },
  ];

  // data for columns for first table
  const columns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "130px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: "maturity",
      key: "maturity",
      width: "110px",
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      align: "center",
      ellipsis: true,
      filters: [
        {
          text: "1Y",
          value: "1",
        },
        {
          text: "6M",
          value: "2",
        },
        {
          text: "3M",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: "bid",
      key: "bid",
      ellipsis: true,
      render: (text) => (
        <Button
          text={text}
          onClick={openBuyModal}
          className="bid-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">Offer</label>,
      dataIndex: "offer",
      key: "offer",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      ellipsis: true,
      filters: [
        {
          text: "119",
          value: "1",
        },
        {
          text: "20",
          value: "2",
        },
        {
          text: "21",
          value: "3",
        },
        {
          text: "35",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Inventory Available</label>,
      dataIndex: "inventory",
      width: "100px",
      key: "inventory",
      ellipsis: true,
    },
  ];

  // data for Pib table columns for first table
  const Pibcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: "maturity",
      key: "maturity",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      align: "center",
      width: "100px",
      ellipsis: true,
      filters: [
        {
          text: "1Y",
          value: "1",
        },
        {
          text: "6M",
          value: "2",
        },
        {
          text: "3M",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: "bid",
      key: "bid",
      width: "80px",
      ellipsis: true,
      render: (text) => (
        <Button
          text={text}
          onClick={openBuyModal}
          className="bid-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">Offer</label>,
      dataIndex: "offer",
      key: "offer",
      width: "70px",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "80px",
      ellipsis: true,
      filters: [
        {
          text: "119",
          value: "1",
        },
        {
          text: "20",
          value: "2",
        },
        {
          text: "21",
          value: "3",
        },
        {
          text: "35",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Inventory Available</label>,
      dataIndex: "inventory",
      width: "100px",
      key: "inventory",
      ellipsis: true,
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      width: "70px",
      key: "Coupon",
    },
  ];

  // data for PibFloater table columns for first table
  const PibFloatercolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: "maturity",
      key: "maturity",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
        {
          text: "10-10-2022",
          value: "2",
        },
        {
          text: "09-10-2022",
          value: "3",
        },
        {
          text: "07-10-2022",
          value: "4",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      width: "100px",
      align: "center",
      ellipsis: true,
      filters: [
        {
          text: "1Y",
          value: "1",
        },
        {
          text: "6M",
          value: "2",
        },
        {
          text: "3M",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: "bid",
      key: "bid",
      width: "100px",
      ellipsis: true,
      render: (text) => (
        <Button
          text={text}
          onClick={openBuyModal}
          className="bid-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">Offer</label>,
      dataIndex: "offer",
      key: "offer",
      width: "100px",
      render: (text) => (
        <Button
          text={text}
          onClick={openSellModal}
          className="offer-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">DTM</label>,
      dataIndex: "dtm",
      key: "dtm",
      width: "100px",
      ellipsis: true,
      filters: [
        {
          text: "119",
          value: "1",
        },
        {
          text: "20",
          value: "2",
        },
        {
          text: "21",
          value: "3",
        },
        {
          text: "35",
          value: "3",
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: "Coupon",
      key: "Coupon",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Frequency</label>,
      dataIndex: "frequency",
      key: "frequency",
      width: "100px",
    },
    {
      title: <label className="table-all-title">Bid Spread</label>,
      dataIndex: "bidspread",
      key: "bidspread",
      width: "100px",
    },
  ];

  // data for columns for second table
  const columnsTwo = [
    {
      title: <label className="bottom-table-header">TXN ID</label>,
      dataIndex: "txnid",
      key: "txnid",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Bank</label>,
      dataIndex: "bank",
      key: "bank",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "JS-BANK",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Position</label>,
      dataIndex: "position",
      key: "position",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "BUY",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Security Type</label>,
      dataIndex: "securitytype",
      key: "securitytype",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "TBILLS",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Amount</label>,
      dataIndex: "amount",
      key: "amount",
      width: "80px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "1,000,000",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Rate</label>,
      dataIndex: "rate",
      key: "rate",
      width: "80px",
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Maturity Date</label>,
      dataIndex: "maturitydate",
      key: "maturitydate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Trade Date</label>,
      dataIndex: "tradedate",
      key: "tradedate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">No of Days</label>,
      dataIndex: "noofdays",
      key: "noofdays",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "0",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Settlement Date</label>,
      dataIndex: "settlement",
      key: "settlement",
      width: "110px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Status</label>,
      dataIndex: "status",
      key: "status",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "Rejected",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Action</label>,
      dataIndex: "action",
      key: "action",
      width: "100px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: "comment",
      key: "comment",
      width: "100px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Chat</label>,
      dataIndex: "chat",
      key: "chat",
      width: "100px",
      render: (text) => (
        <Button text={text} className="chatIcon-inBotton-table" />
      ),
      // ellipsis: true,
    },
  ];

  // data for columns for outstanding table
  const outstandingDeals = [
    {
      title: <label className="bottom-table-header">TXN ID</label>,
      dataIndex: "txnid",
      key: "txnid",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "12-10-2022",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Client</label>,
      dataIndex: "client",
      key: "client",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "JS-BANK",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Position</label>,
      dataIndex: "position",
      key: "position",
      width: "100px",
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "BUY",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Security Type</label>,
      dataIndex: "securitytype",
      key: "securitytype",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "TBILLS",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Amount</label>,
      dataIndex: "amount",
      key: "amount",
      width: "80px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "1,000,000",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Bid</label>,
      dataIndex: "bid",
      key: "bid",
      width: "80px",
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Offer</label>,
      dataIndex: "offer",
      key: "offer",
      width: "80px",
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: "tenor",
      key: "tenor",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Issue Date</label>,
      dataIndex: "issuedate",
      key: "issuedate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Maturity Date</label>,
      dataIndex: "maturitydate",
      key: "maturitydate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "3M",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Trade Date</label>,
      dataIndex: "tradedate",
      key: "tradedate",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">No of Days</label>,
      dataIndex: "noofdays",
      key: "noofdays",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "0",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Settlement Date</label>,
      dataIndex: "settlement",
      key: "settlement",
      width: "110px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "21-03-2023",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Status</label>,
      dataIndex: "status",
      key: "status",
      width: "100px",
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: "Rejected",
          value: "1",
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: "comment",
      key: "comment",
      width: "100px",
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Chat</label>,
      dataIndex: "chat",
      key: "chat",
      width: "100px",
      render: (text) => (
        <Button text={text} className="chatIcon-inBotton-table" />
      ),
      // ellipsis: true,
    },
  ];

  // data for rows second table
  const dataTwo = [
    {
      txnid: "21-03-2023/4c18",
      bank: "JS Bank",
      position: "Buy",
      securitytype: "Tbills",
      amount: "1,000,000",
      tenor: "3m",
      tradedate: "21-03-2023",
      noofdays: "0",
      settlement: "21-03-2023",
      status: <span className="rejected-status">Rejected</span>,
      chat: <i className={"icon-chat2"}></i>,
    },
  ];

  // data for outstanding rows second table
  const outstandingData = [
    {
      txnid: "21-03-2023/4c18",
      client: "Gul Ahmed",
      position: "Buy",
      securitytype: "Tbills",
      amount: "1,000,000",
      bid: "sw",
      offer: "ww",
      tenor: "3m",
      issuedate: "30-09-2022",
      tradedate: "21-03-2023",
      noofdays: "0",
      settlement: "21-03-2023",
      status: <span className="pending-status">Pending</span>,
      chat: <i className={"icon-chat2"}></i>,
    },
  ];

  //open modal
  const openModalHandler = async () => {
    setShow(true);
  };

  //open view modal
  const openViewModal = async () => {
    setViewModal(true);
  };

  //open buy modal
  const openBuyModal = async () => {
    setBuyModal(true);
  };

  //Open sell modal
  const openSellModal = async () => {
    setSellModal(true);
  };

  //open another Tbill table
  const openTbillTable = () => {
    setIsTbills(true);
    setIsPib(false);
    setIsPibFloater(false);
  };

  //open right tabe Tbill
  const openRightTbill = () => {
    setIsRightTbills(true);
    setIsRightPib(false);
    setIsPibRightFloater(false);
  };

  //open another Pib table
  const openPibTable = () => {
    setIsPib(true);
    setIsTbills(false);
    setIsPibFloater(false);
  };

  //open right pib table
  const openRightPib = () => {
    setIsRightPib(true);
    setIsRightTbills(false);
    setIsPibRightFloater(false);
  };

  //open another PibFoater table
  const openPibFloaterTable = () => {
    setIsPibFloater(true);
    setIsPib(false);
    setIsTbills(false);
  };

  //open right pibfloater table
  const openRightFloater = () => {
    setIsPibRightFloater(true);
    setIsRightPib(false);
    setIsRightTbills(false);
  };

  //open pkrv panel
  const openPkrvPanel = () => {
    setIsPkrv(true);
    setIsRecent(false);
  };

  //for left table onchange handler
  const panelHandler = (e) => {
    console.log(e, "change Handler");
    setCurrentTable(e);
  };

  // for right table onchange handler
  const panelRightHandler = (e) => {
    setCurrentRightTable(e);
  };

  // for bottom export button
  const exportHandler = () => {
    setIsExport(true);
  };

  //for bottom table
  const txnTableHandler = () => {
    setIsTxn(true);
    setIsOutstanding(false);
  };

  //for bottom table
  const outstandingTableHandler = () => {
    setIsOutstanding(true);
    setIsTxn(false);
  };

  return (
    <>
      <Container fluid className="table-content-div">
        <Row className="remove-gutterx-space">
          <Col lg={6} md={6} sm={6}>
            <div className="card-box">
              <Row className="mt-2">
                <Col lg={8} md={8} sm={8}>
                  <Select
                    options={tableFilterOptions}
                    defaultValue={tableFilterOptions[0]}
                    className="tableFilter"
                    onChange={panelHandler}
                    // onClick={openPkrvPanel}
                  />
                </Col>

                {currentTable === 1 ? (
                  <>
                    <>
                      <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                        <label className="upper-date-time">
                          05-04-2023 16:53 PM
                        </label>
                      </Col>
                    </>
                  </>
                ) : currentTable === 2 ? (
                  <>
                    <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                      <TextField
                        placeholder="search"
                        className="pkrv-search-textfield"
                      />
                    </Col>
                  </>
                ) : currentTable === 3 ? (
                  <>
                    <div className="second-row">
                      <div className="News-div-scroll">
                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">6-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img
                              src={DowJones}
                              width={40}
                              onClick={openViewModal}
                            />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">5-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={DowJones} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ) : null}
              </Row>

              {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
              {currentTable === 1 ? (
                <>
                  <div className="upper-div-button">
                    <Button
                      text="Tbills"
                      className={"table-upper-tbill-button"}
                      onClick={openTbillTable}
                    />
                    <Button
                      text="PIBs"
                      className="table-upper-PIB-button"
                      onClick={openPibTable}
                    />
                    <Button
                      text="PIB Floater"
                      className="table-upper-Floater-button"
                      onClick={openPibFloaterTable}
                    />
                    <Button
                      text="SUKUK"
                      className="table-upper-SUKUK-button"
                      onClick={openTbillTable}
                    />
                  </div>
                </>
              ) : null}

              {currentTable === 1 ? (
                <>
                  {isTbills ? (
                    <>
                      <Table
                        // dataSource={filteredData}
                        column={columns}
                        rows={filteredData}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPib ? (
                    <>
                      <Table
                        column={Pibcolumns}
                        rows={pibFilter}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPibFloater ? (
                    <>
                      <Table
                        column={PibFloatercolumns}
                        rows={pibFloaterFilter}
                        scroll={{ x: "max-content" }}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isSukuk ? (
                    <>
                      <Table
                        column={columns}
                        rows={data}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : null}
                </>
              ) : currentTable === 2 ? (
                <>
                  <Table
                    column={PkrvPanelcolumns}
                    rows={PkrvPaneldata}
                    className="inside-pkrv-table"
                    pagination={false}
                  />
                </>
              ) : null}
            </div>
          </Col>

          <Col lg={5} md={5} sm={5} className="news-colm">
            <div className="card-box">
              <Row className="mt-2">
                <Col lg={8} md={8} sm={8}>
                  <Select
                    options={rightTableOption}
                    defaultValue={rightTableOption[2]}
                    className="tableFilter"
                    onChange={panelRightHandler}
                    // onClick={openPkrvPanel}
                  />
                </Col>

                {currentRightTable === 1 ? (
                  <>
                    <>
                      <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                        <label className="upper-date-time">
                          05-04-2023 16:53 PM
                        </label>
                      </Col>
                    </>
                  </>
                ) : currentRightTable === 2 ? (
                  <>
                    <Col lg={4} md={4} sm={4} className="upper-3m-colum">
                      <TextField
                        placeholder="search"
                        className="pkrv-search-textfield"
                      />
                    </Col>
                  </>
                ) : currentRightTable === 3 ? (
                  <>
                    <div className="second-row">
                      <div className="News-div-scroll">
                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">6-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img
                              src={DowJones}
                              width={40}
                              onClick={openViewModal}
                            />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="latest-date-row">
                          <Col lg={12} md={12} sm={12}>
                            <label className="latest-date">5-12-2022</label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={DowJones} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={CNBC} width={40} />
                            <label className="dj-jones-text">
                              Russian oil Cap will work, EU ministers insist,
                              despite kermlin opposition and
                            </label>
                          </Col>
                        </Row>

                        <Row className="text-border-bottom">
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="dowjones-columns"
                          >
                            <label className="date-dj-jone">11:48</label>
                            <img src={Tresmark} width={40} />
                            <label className="dj-jones-text">
                              DJ Interbank Foreign Exchange Rates At 01:50 EST /
                              0650 GMT
                            </label>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ) : null}
              </Row>

              {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
              {currentRightTable === 1 ? (
                <>
                  <div className="upper-div-button">
                    <Button
                      text="Tbills"
                      className="table-upper-tbill-button"
                      onClick={openRightTbill}
                    />
                    <Button
                      text="PIBs"
                      className="table-upper-PIB-button"
                      onClick={openRightPib}
                    />
                    <Button
                      text="PIB Floater"
                      className="table-upper-Floater-button"
                      onClick={openRightFloater}
                    />
                    <Button
                      text="SUKUK"
                      className="table-upper-SUKUK-button"
                      onClick={openRightTbill}
                    />
                  </div>
                </>
              ) : null}

              {currentRightTable === 1 ? (
                <>
                  {isRightTbills ? (
                    <>
                      <Table
                        column={columns}
                        rows={filteredData}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isRightPib ? (
                    <>
                      <Table
                        column={Pibcolumns}
                        rows={Pibdata}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isPibRightFloater ? (
                    <>
                      <Table
                        column={PibFloatercolumns}
                        rows={PibFloaterdata}
                        scroll={{ x: "max-content" }}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : isRightSukuk ? (
                    <>
                      <Table
                        column={columns}
                        rows={data}
                        className="inside-table"
                        pagination={false}
                      />
                    </>
                  ) : null}
                </>
              ) : currentRightTable === 2 ? (
                <>
                  <Table
                    column={PkrvPanelcolumns}
                    rows={PkrvPaneldata}
                    className="inside-pkrv-table"
                    pagination={false}
                  />
                </>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bottom-table-container">
        <div className="bottom-container-div">
          <Row className="mt-3">
            <Col lg={6} md={6} sm={6} className="txn-outstanding-btns">
              <Button
                text="TXN Summary"
                className={"txn-summary-btn"}
                onClick={txnTableHandler}
              />
              <Button
                text="Outstanding Deals"
                className={"txn-summary-btn"}
                onClick={outstandingTableHandler}
              />
            </Col>
            <Col lg={6} md={6} sm={6} className="bottom-table-buttons">
              <Button
                text="Export"
                className="export-bttom-btn"
                onClick={() => setIsExport(!isExport)}
              />

              {isExport ? (
                <>
                  <div className="bottom-export-div">
                    <img src={PDF} alt="pdf" height={25} />
                    <img src={Excel} alt="pdf" height={25} />
                    <span className="col">
                      <i className="icon-email2 fs-4 cursor-pointer"></i>
                    </span>
                    <span className="col">
                      <i className="icon-screen fs-4 cursor-pointer"></i>
                    </span>
                  </div>
                </>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="features-table">
              {isTxn ? (
                <>
                  <Table
                    column={columnsTwo}
                    rows={dataTwo}
                    className="bottom-inside-table"
                    pagination={false}
                  />
                </>
              ) : isOutstanding ? (
                <>
                  <Table
                    column={outstandingDeals}
                    rows={outstandingData}
                    className="bottom-inside-table"
                    pagination={false}
                  />
                </>
              ) : null}
            </Col>
          </Row>
        </div>
      </Container>

      <Modal
        show={show || viewModal || buyModal || sellModal}
        setShow={() => {
          setShow();
          setViewModal();
          setBuyModal();
          setSellModal();
        }}
        // backdrop={true}
        modalHeaderClassName={
          viewModal === true ? "d-none" : "header-Video-Modal-close-btn"
        }
        modalFooterClassName={viewModal === true ? "viewFooter" : "showFooter"}
        className={
          viewModal === true
            ? "modaldialog modal-view"
            : "modaldialog modal-styles"
        }
        size={show === true ? "lg" : "lg"}
        onHide={() => {
          setShow(false);
          setViewModal(false);
          setBuyModal(false);
          setSellModal(false);
        }}
        ModalBody={
          <>
            {show ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <label className="request-quote-label">
                      REQUEST FOR QUOTE
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12} className="text-field">
                    <label className="modal-title-trade">Trade Date</label>

                    <TextField className="text-field-size-modal" />

                    <label className="modal-title-trade">No. of Days</label>

                    <TextField className="text-field-size-modal" />

                    <label className="modal-title-trade">Settlement Date</label>

                    <TextField className="text-field-size-modal" />
                  </Col>
                </Row>

                <div className="heading-paper">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Coupon Rate</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Security Type*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Issue date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4} className="mt-4">
                      <Select className="quoteShowModal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Amount (PKR)*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : viewModal ? (
              <>
                <Row>
                  <Col lg={1} md={1} sm={12}>
                    <img src={CNBC} width={40} />
                  </Col>
                  <Col lg={11} md={11} sm={12}>
                    <label className="view-modal-light-label">
                      18-Dec-2020 3:30 PM
                    </label>
                    <br />
                    <label className="view-modal-bold-label">
                      Stock futures little changed after the Dow notches a
                      record close
                    </label>
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="view-modal-height-scroll"
                  >
                    <label className="discription-text">
                      Stock futures were mixed in early morning trading
                      Wednesday after the Dow Jones Industrial Average notched a
                      record close the previous day as investors flocked to
                      shares that stand to benefit from an economic recovery.
                      <br />
                      <br />
                      Futures on the blue-chip Dow rose 28 points. S&P 500
                      futures were flat and Nasdaq 100 futures edged 0.2% lower.
                      <br />
                      <br />
                      On Tuesday, while the Dow climbed 200 points to a new
                      high, the tech-focused Nasdaq Composite suffered a
                      sell-off, down 1.3%, amid a rapid rise in Treasury yields.
                      The closely-watched benchmark 10-year Treasury yield was
                      as high as 1.71% Tuesday, triggering selling in
                      growth-oriented technology stocks.
                      <br />
                      <br />
                      Megacap tech stocks underperformed the S&P 500 Tuesday as
                      “investors reconsidered the value of such long-duration
                      assets in the wake of higher rates,” Chris Hussey, a
                      managing director at Goldman Sachs, said in a note.
                      <br />
                      <br />
                      Stock futures were mixed in early morning trading
                      Wednesday after the Dow Jones Industrial Average notched a
                      record close the previous day as investors flocked to
                      shares that stand to benefit from an economic recovery.
                      <br />
                      <br />
                      Futures on the blue-chip Dow rose 28 points. S&P 500
                      futures were flat and Nasdaq 100 futures edged 0.2% lower.
                      <br />
                      <br />
                      On Tuesday, while the Dow climbed 200 points to a new
                      high, the tech-focused Nasdaq Composite suffered a
                      sell-off, down 1.3%, amid a rapid rise in Treasury yields.
                      The closely-watched benchmark 10-year Treasury yield was
                      as high as 1.71% Tuesday, triggering selling in
                      growth-oriented technology stocks.
                      <br />
                      <br />
                      Megacap tech stocks underperformed the S&P 500 Tuesday as
                      “investors reconsidered the value of such long-duration
                      assets in the wake of higher rates,” Chris Hussey, a
                      managing director at Goldman Sachs, said in a note.
                    </label>
                  </Col>
                </Row>
              </>
            ) : buyModal ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-start"
                  >
                    <label className="buy-quote-label">SOMEONE BUY</label>
                  </Col>
                </Row>

                <div className="heading-paper">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Security Type*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Amount (PKR)*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">No. of Days</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Settlement Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : sellModal ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-start"
                  >
                    <label className="buy-quote-label">SOMEONE SELL</label>
                  </Col>
                </Row>

                <div className="heading-paper">
                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Position*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Security Type*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Amount (PKR)*</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Tenor*</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Issue Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Maturity date</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Trade Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">No. of Days</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-start mt-4"
                    >
                      <label className="position-label">Settlement Date</label>
                    </Col>

                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>

                    <Col
                      lg={2}
                      md={2}
                      sm={2}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className="position-label">Comment</label>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <TextField className="text-field-size-modal" />
                    </Col>
                  </Row>
                </div>
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {show ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
                  </Col>
                </Row>
              </>
            ) : viewModal ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="social-icons-group"
                  >
                    <i className="icon-facebook"></i>

                    <i className="icon-linkedin"></i>

                    <i className="icon-twitter"></i>

                    <i className="icon-youtube "></i>
                    {/* <Facebook size={25} />
                    <Facebook size={25} />
                    <Facebook size={25} /> */}
                  </Col>
                </Row>
              </>
            ) : buyModal ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="buy-modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
                  </Col>
                </Row>
              </>
            ) : sellModal ? (
              <>
                <Row className="showRow-top-line">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="buy-modal-footer-confirm"
                  >
                    <Button text="Confirm" className="conifrm-btn" />
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
      />
    </>
  );
};

export default Dealer;
