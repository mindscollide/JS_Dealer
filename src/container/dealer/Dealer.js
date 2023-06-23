import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  Table,
  Button,
  Modal,
  TextField,
  Loader,
} from '../../components/elements'
import {
  CaretDownFill,
  X,
  Send,
  Paperclip,
  ChatDots,
} from 'react-bootstrap-icons'

import ViewModal from '../Pages/viewModal-Dealer/ViewModal'
import JohnCater from '../../assets/images/profile3.png'
import DowJones from '../../assets/images/dowjones.png'
import CNBC from '../../assets/images/cnbc.png'
import PDF from '../../assets/images/pdf.png'
import Excel from '../../assets/images/excel.png'

import { Select } from 'antd'
import Tresmark from '../../assets/images/tresmark.png'
import './Dealer.css'

const Dealer = () => {
  const [show, setShow] = useState(false)

  //for another chat box open
  const [chatBoxOpen, setChatBoxOpen] = useState(false)

  //View dealer modal
  const [viewDealerModal, setViewDealerModal] = useState(false)

  //view modal for client
  const [viewModal, setViewModal] = useState(false)

  //for buy modal for client
  const [buyModal, setBuyModal] = useState(false)

  //for sell modal for client
  const [sellModal, setSellModal] = useState(false)

  //for left table option state
  const [currentTable, setCurrentTable] = useState(1)

  //for right table option state
  const [currentRightTable, setCurrentRightTable] = useState(3)

  //for LEFT columns states in table
  const [isTbills, setIsTbills] = useState(true)
  const [isPib, setIsPib] = useState(false)
  const [isPibFloater, setIsPibFloater] = useState(false)
  const [isSukuk, setIsSukuk] = useState(false)

  // for RIGHT columns states
  const [isRightTbills, setIsRightTbills] = useState(true)
  const [isRightPib, setIsRightPib] = useState(false)
  const [isPibRightFloater, setIsPibRightFloater] = useState(false)
  const [isRightSukuk, setIsRightSukuk] = useState(false)

  //for bottom outstanding table
  const [isTxn, setIsTxn] = useState(true)
  const [isOutstanding, setIsOutstanding] = useState(false)

  // for bottom button export file toggle
  const [isExport, setIsExport] = useState(false)

  // fro another recent quote select panel
  const [isRecent, setIsRecent] = useState(true)

  // for another PKRV select panel
  const [isPkrv, setIsPkrv] = useState(false)

  // data for rows for first table
  const data = [
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: '3m',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: '3m',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '6m',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
  ]

  // data for rows for first table
  const Pibdata = [
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: '2Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: '3Y',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: '5Y',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '10Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '2Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '3Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
      Coupon: 16,
    },
  ]

  // data for rows for first table
  const PibFloaterdata = [
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 2,
      bidspread: 20,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: '3Y',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: '2Y',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 4,
      bidspread: 20,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '2Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '10Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '5Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      frequency: 2,
      bidspread: 25,
    },
  ]

  // data for sukuk
  const sukukData = [
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: '3m',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: '3m',
      bid: 232,
      offer: 15.43,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '6m',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      bid: 232,
      offer: 15.72,
      dtm: 'ewew',
      inventory: '1,000,000',
    },
  ]

  // for Tbills filter data
  const [filteredData, setFilteredData] = useState(data)

  // for Pib filter data
  const [pibFilter, setPibFilter] = useState(Pibdata)

  // for pib floater filter data
  const [pibFloaterFilter, setIsPibFloaterFilter] = useState(PibFloaterdata)

  // for tbills filter handler
  const handleFilter = (tenor) => {
    // console.log(tenor, "filteredfiltered");
    // console.log(data, "filteredfiltered");
    const filtered = data.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase(),
    )
    // console.log(filtered, "filteredfiltered");
    setFilteredData(filtered)
  }

  // for pib filter handler
  const pibHandleFilter = (tenor) => {
    const filtered = Pibdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase(),
    )
    setPibFilter(filtered)
  }

  // for pib Floater filter handler
  const pibFloaterHandleFilter = (tenor) => {
    const filtered = PibFloaterdata.filter(
      (item) => item.tenor.toLowerCase() === tenor.toLowerCase(),
    )
    setIsPibFloaterFilter(filtered)
  }

  // data for PKRV panel table columns for table
  const PkrvPanelcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: 'maturity',
      key: 'maturity',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      align: 'center',
      width: '100px',
      ellipsis: true,
      filters: [
        {
          text: '1Y',
          value: '1',
        },
        {
          text: '6M',
          value: '2',
        },
        {
          text: '3M',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Instrument</label>,
      dataIndex: 'instrument',
      key: 'instrument',
      width: '100px',
      ellipsis: true,
    },
    {
      title: <label className="table-all-title">PKRV</label>,
      dataIndex: 'pkrv',
      key: 'pkrv',
      width: '100px',
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
      dataIndex: 'dtm',
      key: 'dtm',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: 'Coupon',
      key: 'Coupon',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Frequency</label>,
      dataIndex: 'couponfrequency',
      key: 'couponfrequency',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Bid Spread</label>,
      dataIndex: 'bidspread',
      key: 'bidspread',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Offer Spread</label>,
      dataIndex: 'offerspread',
      key: 'offerspread',
      width: '100px',
    },
  ]

  // data for rows for first table
  const PkrvPaneldata = [
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">12-01-2023</label>,
      tenor: '1Y',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">22-01-2023</label>,
      tenor: '3m',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">15-01-2023</label>,
      tenor: '2m',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
    {
      key: '1',
      issuedate: <label className="column-boldness">19-10-2022</label>,
      maturity: <label className="column-boldness">18-01-2023</label>,
      tenor: '1Y',
      instrument: 'PIB',
      pkrv: 15.72,
      dtm: 'ewew',
      Coupon: 16,
      couponfrequency: 4,
      bidspread: 25,
      offerspread: 75,
    },
  ]

  // Filter Options for left table
  const tableFilterOptions = [
    { className: 'filter-color', label: 'Recent Quotes', value: 1 },
    {
      className: 'filter-color',
      label: 'PKRV Derived bond',
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
    { className: 'filter-color', label: 'News', value: 3 },
  ]

  //filter options for right table
  const rightTableOption = [
    { className: 'filter-color', label: 'Recent Quotes', value: 1 },
    {
      className: 'filter-color',
      label: 'PKRV Derived bond',
      value: 2,
      // onClick: {openPkrvPanel},
      // onClick: { openPkrvPanel },
    },
    { className: 'filter-color', label: 'News', value: 3 },
  ]

  // data for columns for first table
  const columns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      align: 'center',
      width: '125px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: 'maturity',
      key: 'maturity',
      align: 'center',
      width: '110px',
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      align: 'center',
      width: '100px',
      ellipsis: true,
      filters: [
        {
          text: '1Y',
          value: '1',
        },
        {
          text: '6M',
          value: '2',
        },
        {
          text: '3M',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: 'bid',
      key: 'bid',
      align: 'center',
      width: '70px',
      ellipsis: true,
      render: (text) => (
        <Button
          text={text}
          // onClick={openBuyModal}
          className="bid-text-button"
        />
      ),
    },
    {
      title: <label className="table-all-title">Offer</label>,
      dataIndex: 'offer',
      key: 'offer',
      align: 'center',
      width: '70px',
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
      dataIndex: 'dtm',
      key: 'dtm',
      align: 'center',
      width: '80px',
      // ellipsis: true,
      filters: [
        {
          text: '119',
          value: '1',
        },
        {
          text: '20',
          value: '2',
        },
        {
          text: '21',
          value: '3',
        },
        {
          text: '35',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Inventory Available</label>,
      dataIndex: 'inventory',
      align: 'center',
      width: '120px',
      key: 'inventory',
      // ellipsis: true,
    },
  ]

  // data for Pib table columns for first table
  const Pibcolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: 'maturity',
      key: 'maturity',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      align: 'center',
      width: '100px',
      ellipsis: true,
      filters: [
        {
          text: '1Y',
          value: '1',
        },
        {
          text: '6M',
          value: '2',
        },
        {
          text: '3M',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: 'bid',
      key: 'bid',
      width: '80px',
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
      dataIndex: 'offer',
      key: 'offer',
      width: '70px',
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
      dataIndex: 'dtm',
      key: 'dtm',
      width: '80px',
      ellipsis: true,
      filters: [
        {
          text: '119',
          value: '1',
        },
        {
          text: '20',
          value: '2',
        },
        {
          text: '21',
          value: '3',
        },
        {
          text: '35',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Inventory Available</label>,
      dataIndex: 'inventory',
      width: '100px',
      key: 'inventory',
      ellipsis: true,
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: 'Coupon',
      width: '70px',
      key: 'Coupon',
    },
  ]

  // data for PibFloater table columns for first table
  const PibFloatercolumns = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: 'maturity',
      key: 'maturity',
      width: '100px',
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      width: '100px',
      align: 'center',
      ellipsis: true,
      filters: [
        {
          text: '1Y',
          value: '1',
        },
        {
          text: '6M',
          value: '2',
        },
        {
          text: '3M',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: 'bid',
      key: 'bid',
      width: '100px',
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
      dataIndex: 'offer',
      key: 'offer',
      width: '100px',
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
      dataIndex: 'dtm',
      key: 'dtm',
      width: '100px',
      ellipsis: true,
      filters: [
        {
          text: '119',
          value: '1',
        },
        {
          text: '20',
          value: '2',
        },
        {
          text: '21',
          value: '3',
        },
        {
          text: '35',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Coupon</label>,
      dataIndex: 'Coupon',
      key: 'Coupon',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Frequency</label>,
      dataIndex: 'frequency',
      key: 'frequency',
      width: '100px',
    },
    {
      title: <label className="table-all-title">Bid Spread</label>,
      dataIndex: 'bidspread',
      key: 'bidspread',
      width: '100px',
    },
  ]

  // data for columns for first table
  const sukukColumn = [
    {
      title: <label className="table-all-title">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      width: '130px',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Maturity</label>,
      dataIndex: 'maturity',
      key: 'maturity',
      width: '110px',
      ellipsis: true,
      render: (text) => <label className="maturity-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
        {
          text: '10-10-2022',
          value: '2',
        },
        {
          text: '09-10-2022',
          value: '3',
        },
        {
          text: '07-10-2022',
          value: '4',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      align: 'center',
      ellipsis: true,
      filters: [
        {
          text: '1Y',
          value: '1',
        },
        {
          text: '6M',
          value: '2',
        },
        {
          text: '3M',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Bid</label>,
      dataIndex: 'bid',
      key: 'bid',
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
      dataIndex: 'offer',
      key: 'offer',
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
      dataIndex: 'dtm',
      key: 'dtm',
      ellipsis: true,
      filters: [
        {
          text: '119',
          value: '1',
        },
        {
          text: '20',
          value: '2',
        },
        {
          text: '21',
          value: '3',
        },
        {
          text: '35',
          value: '3',
        },
      ],
      filterIcon: (filtered) => (
        <CaretDownFill className="filter-chevron-icon-client" />
      ),
    },
    {
      title: <label className="table-all-title">Inventory Available</label>,
      dataIndex: 'inventory',
      width: '100px',
      key: 'inventory',
      ellipsis: true,
    },
  ]

  // data for columns for second table
  const columnsTwo = [
    {
      title: <label className="bottom-table-header">TXN ID</label>,
      dataIndex: 'txnid',
      key: 'txnid',
      width: '100px',
      ellipsis: true,
      align: 'center',
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Bank</label>,
      dataIndex: 'bank',
      key: 'bank',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'JS-BANK',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Position</label>,
      dataIndex: 'position',
      key: 'position',
      width: '100px',
      align: 'center',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'BUY',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Security Type</label>,
      dataIndex: 'securitytype',
      key: 'securitytype',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'TBILLS',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Amount</label>,
      dataIndex: 'amount',
      key: 'amount',
      width: '80px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '1,000,000',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Rate</label>,
      dataIndex: 'rate',
      key: 'rate',
      align: 'center',
      width: '80px',
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Maturity Date</label>,
      dataIndex: 'maturitydate',
      key: 'maturitydate',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Trade Date</label>,
      dataIndex: 'tradedate',
      key: 'tradedate',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '21-03-2023',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">No of Days</label>,
      dataIndex: 'noofdays',
      key: 'noofdays',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '0',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Settlement Date</label>,
      dataIndex: 'settlement',
      key: 'settlement',
      align: 'center',
      width: '110px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '21-03-2023',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Status</label>,
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'Rejected',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Action</label>,
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      width: '100px',
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: 'comment',
      key: 'comment',
      align: 'center',
      width: '100px',
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Chat</label>,
      dataIndex: 'chat',
      key: 'chat',
      align: 'center',
      width: '100px',
      render: (text) => (
        <Button
          text={text}
          onClick={() => setChatBoxOpen(!chatBoxOpen)}
          className="chatIcon-inBotton-table"
        />
      ),
      // ellipsis: true,
    },
  ]

  // data for columns for outstanding table
  const outstandingDeals = [
    {
      title: <label className="bottom-table-header">TXN ID</label>,
      dataIndex: 'txnid',
      key: 'txnid',
      width: '100px',
      align: 'center',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '12-10-2022',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Client</label>,
      dataIndex: 'client',
      key: 'client',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'JS-BANK',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Position</label>,
      dataIndex: 'position',
      key: 'position',
      width: '100px',
      align: 'center',
      ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'BUY',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Security Type</label>,
      dataIndex: 'securitytype',
      key: 'securitytype',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'TBILLS',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Amount</label>,
      dataIndex: 'amount',
      key: 'amount',
      align: 'center',
      width: '80px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '1,000,000',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Bid</label>,
      dataIndex: 'bid',
      key: 'bid',
      width: '80px',
      align: 'center',
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Offer</label>,
      dataIndex: 'offer',
      key: 'offer',
      align: 'center',
      width: '80px',
      ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Tenor</label>,
      dataIndex: 'tenor',
      key: 'tenor',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Issue Date</label>,
      dataIndex: 'issuedate',
      key: 'issuedate',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Maturity Date</label>,
      dataIndex: 'maturitydate',
      key: 'maturitydate',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '3M',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Trade Date</label>,
      dataIndex: 'tradedate',
      key: 'tradedate',
      width: '100px',
      align: 'center',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '21-03-2023',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">No of Days</label>,
      dataIndex: 'noofdays',
      key: 'noofdays',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '0',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Settlement Date</label>,
      dataIndex: 'settlement',
      key: 'settlement',
      align: 'center',
      width: '110px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: '21-03-2023',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Status</label>,
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: '100px',
      // ellipsis: true,
      render: (text) => <label className="issue-date-column">{text}</label>,
      filters: [
        {
          text: 'Rejected',
          value: '1',
        },
      ],
      filterIcon: (filtered) => <CaretDownFill className="filtericon-bottom" />,
    },
    {
      title: <label className="bottom-table-header">Comment</label>,
      dataIndex: 'comment',
      key: 'comment',
      align: 'center',
      width: '100px',
      // ellipsis: true,
    },
    {
      title: <label className="bottom-table-header">Chat</label>,
      dataIndex: 'chat',
      key: 'chat',
      align: 'center',
      width: '100px',
      render: (text) => (
        <Button
          text={text}
          className="chatIcon-inBotton-table"
          onClick={() => setChatBoxOpen(!chatBoxOpen)}
        />
      ),
      // ellipsis: true,
    },
  ]

  // data for rows second table
  const dataTwo = [
    {
      txnid: '21-03-2023/4c18',
      bank: 'JS Bank',
      position: 'Buy',
      securitytype: 'Tbills',
      amount: '1,000,000',
      tenor: '3m',
      tradedate: '21-03-2023',
      noofdays: '0',
      settlement: '21-03-2023',
      status: <span className="rejected-status">Rejected</span>,
      chat: <i className={'icon-chat2'}></i>,
    },
  ]

  // data for outstanding rows second table
  const outstandingData = [
    {
      txnid: '21-03-2023/4c18',
      client: 'Gul Ahmed',
      position: 'Buy',
      securitytype: 'Tbills',
      amount: '1,000,000',
      bid: 'sw',
      offer: 'ww',
      tenor: '3m',
      issuedate: '30-09-2022',
      tradedate: '21-03-2023',
      noofdays: '0',
      settlement: '21-03-2023',
      status: <span className="pending-status">Pending</span>,
      chat: <i className={'icon-chat2'}></i>,
    },
  ]

  //open modal
  const openModalHandler = async () => {
    setShow(true)
  }

  //open view modal
  const openViewModal = async () => {
    setViewDealerModal(true)
  }

  //open buy modal
  const openBuyModal = async () => {
    setBuyModal(true)
  }

  //Open sell modal
  const openSellModal = async () => {
    setSellModal(true)
  }

  //open another Tbill table
  const openTbillTable = () => {
    setIsTbills(true)
    setIsPib(false)
    setIsPibFloater(false)
    setIsSukuk(false)
  }

  //open right tabe Tbill
  const openRightTbill = () => {
    setIsRightTbills(true)
    setIsRightPib(false)
    setIsPibRightFloater(false)
    setIsRightSukuk(false)
  }

  //open another Pib table
  const openPibTable = () => {
    setIsPib(true)
    setIsTbills(false)
    setIsPibFloater(false)
    setIsSukuk(false)
  }

  //open right pib table
  const openRightPib = () => {
    setIsRightPib(true)
    setIsRightTbills(false)
    setIsPibRightFloater(false)
    setIsRightSukuk(false)
  }

  //open another PibFoater table
  const openPibFloaterTable = () => {
    setIsPibFloater(true)
    setIsPib(false)
    setIsTbills(false)
    setIsSukuk(false)
  }

  //open right pibfloater table
  const openRightFloater = () => {
    setIsPibRightFloater(true)
    setIsRightPib(false)
    setIsRightTbills(false)
    setIsRightSukuk(false)
  }

  //open sukuk table
  const openSukuk = () => {
    setIsSukuk(true)
    setIsTbills(false)
    setIsPib(false)
    setIsPibFloater(false)
  }

  //open right Sukuk table
  const openRightSukuk = () => {
    setIsRightSukuk(true)
    setIsPibRightFloater(false)
    setIsRightPib(false)
    setIsRightTbills(false)
  }

  //open pkrv panel
  const openPkrvPanel = () => {
    setIsPkrv(true)
    setIsRecent(false)
  }

  //for left table onchange handler
  const panelHandler = (e) => {
    console.log(e, 'change Handler')
    setCurrentTable(e)
  }

  // for right table onchange handler
  const panelRightHandler = (e) => {
    setCurrentRightTable(e)
  }

  // for bottom export button
  const exportHandler = () => {
    setIsExport(true)
  }

  //for bottom table
  const txnTableHandler = () => {
    setIsTxn(true)
    setIsOutstanding(false)
  }

  //for bottom table
  const outstandingTableHandler = () => {
    setIsOutstanding(true)
    setIsTxn(false)
  }

  return (
    <>
      <Container fluid className="page-gutter">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={6} className="ps-1 pe-1 mb-2">
                <div className="card-box p-2">
                  <div className="box-header">
                    <div className="d-flex align-items-center">
                      <Select
                        options={tableFilterOptions}
                        defaultValue={tableFilterOptions[0]}
                        className="tableFilter"
                        onChange={panelHandler}
                        // onClick={openPkrvPanel}
                      />
                      <div className="ms-auto">
                        {currentTable === 1 ? (
                          <>
                            <label className="upper-date-time">
                              05-04-2023 16:53 PM
                            </label>
                          </>
                        ) : currentTable === 2 ? (
                          <>
                            <TextField
                              placeholder="search"
                              className="pkrv-search-textfield"
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                    {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
                    {currentTable === 1 ? (
                      <>
                        <ul className="nav nav-tabs nav-justified mt-2 replace-fixed-header-on-tab-change control-data-header">
                          <li className="nav-item">
                            <Button
                              text="Tbills"
                              className={
                                isTbills
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openTbillTable}
                              variant=""
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="PIBs"
                              className={
                                isPib
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              variant=""
                              onClick={openPibTable}
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="PIB Floater"
                              className={
                                isPibFloater
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openPibFloaterTable}
                              variant=""
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="SUKUK"
                              className={
                                isSukuk
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openSukuk}
                              variant=""
                            />
                          </li>
                        </ul>
                      </>
                    ) : null}
                  </div>
                  <div className="box-content-wrapper">
                    {currentTable === 1 ? (
                      <>
                        {isTbills ? (
                          <>
                            <Table
                              // dataSource={filteredData}
                              column={columns}
                              fixed="true"
                              rows={filteredData}
                              className="inside-table"
                              pagination={false}
                              scroll={{ y: 50 }}
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
                              scroll={{ x: 'max-content' }}
                              className="inside-table"
                              pagination={false}
                            />
                          </>
                        ) : isSukuk ? (
                          <>
                            <Table
                              column={sukukColumn}
                              rows={sukukData}
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
                    ) : currentTable === 3 ? (
                      <>
                        <div className="second-row">
                          <div className="News-div-scroll">
                            <Row className="news-date-heading bg-light color-hd fw-bold p-1 m-0">
                              <Col lg={12} md={12} sm={12} className="p-0">
                                <label className="">6-12-2022</label>
                              </Col>
                            </Row>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img
                                  className="img-fluid"
                                  src={DowJones}
                                  width={35}
                                  onClick={openViewModal}
                                />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>

                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img className="img-fluid" src={Tresmark} />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <Row className="news-date-heading bg-light color-hd fw-bold p-1 m-0">
                              <Col lg={12} md={12} sm={12} className="p-0">
                                <label className="">5-12-2022</label>
                              </Col>
                            </Row>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={DowJones} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={Tresmark} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} className="ps-1 pe-1 mb-2">
                <div className="card-box p-2">
                  <div className="box-header">
                    <div className="d-flex align-items-center">
                      <Select
                        options={rightTableOption}
                        defaultValue={rightTableOption[2]}
                        className="tableFilter"
                        onChange={panelRightHandler}
                        // onClick={openPkrvPanel}
                      />
                      <div className="ms-auto">
                        {currentRightTable === 1 ? (
                          <>
                            <label className="upper-date-time">
                              05-04-2023 16:53 PM
                            </label>
                          </>
                        ) : currentRightTable === 2 ? (
                          <>
                            <TextField
                              placeholder="search"
                              className="pkrv-search-textfield"
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                    {/* current table 1 2 3 ye sb filters ma set ki hoe hain hm yaha condition laga kr match krraha */}
                    {currentRightTable === 1 ? (
                      <>
                        <ul className="nav nav-tabs nav-justified mt-2 replace-fixed-header-on-tab-change control-data-header">
                          <li className="nav-item">
                            <Button
                              text="Tbills"
                              className={
                                isRightTbills
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openRightTbill}
                              variant=""
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="PIBs"
                              className={
                                isRightPib
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              variant=""
                              onClick={openRightPib}
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="PIB Floater"
                              className={
                                isPibRightFloater
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openRightFloater}
                              variant=""
                            />
                          </li>
                          <li className="nav-item">
                            <Button
                              text="SUKUK"
                              className={
                                isRightSukuk
                                  ? 'nav-link text-nowrap active'
                                  : 'nav-link text-nowrap'
                              }
                              onClick={openRightSukuk}
                              variant=""
                            />
                          </li>
                        </ul>
                      </>
                    ) : null}
                  </div>
                  <div className="box-content-wrapper">
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
                              scroll={{ x: 'max-content' }}
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
                    ) : currentRightTable === 3 ? (
                      <>
                        <div className="second-row">
                          <div className="News-div-scroll">
                            <Row className="news-date-heading bg-light color-hd fw-bold p-1 m-0">
                              <Col lg={12} md={12} sm={12} className="p-0">
                                <label className="">6-12-2022</label>
                              </Col>
                            </Row>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img
                                  className="img-fluid"
                                  src={DowJones}
                                  width={35}
                                  onClick={openViewModal}
                                />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>

                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img className="img-fluid" src={Tresmark} />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <Row className="news-date-heading bg-light color-hd fw-bold p-1 m-0">
                              <Col lg={12} md={12} sm={12} className="p-0">
                                <label className="">5-12-2022</label>
                              </Col>
                            </Row>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={DowJones} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={CNBC} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                Russian oil Cap will work, EU ministers insist,
                                despite kermlin opposition and broad skepticism
                              </div>
                            </div>

                            <div className="d-flex align-items-center pt-1 pb-1 border-bottom">
                              <label className="news-date color-light fw-semibold pe-1 w-fix-50">
                                11:48
                              </label>
                              <div className="w-fix-35">
                                <img src={Tresmark} className="img-fluid" />
                              </div>
                              <div className="news-desc text-truncate max-w-80 ps-2 fw-semibold">
                                DJ Interbank Foreign Exchange Rates At 01:50 EST
                                / 0650 GMT
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="bottom-container-div">
          <Row className="mb-2 me-5">
            <Col lg={12} md={12} sm={12}>
              <Row className="mt-3">
                <Col lg={6} md={6} sm={6} className="txn-outstanding-btns">
                  <ul className="nav nav-tabs mt-2 replace-fixed-header-on-tab-change">
                    <li className="nav-item">
                      <Button
                        text="TXN Summary"
                        className={
                          isTxn
                            ? 'nav-link nav-link-secondary text-nowrap active ps-3 pe-3 me-2'
                            : 'nav-link nav-link-secondary text-nowrap ps-3 pe-3 me-2'
                        }
                        onClick={txnTableHandler}
                        variant=""
                      />
                    </li>
                    <li className="nav-item">
                      <Button
                        text="Outstanding Deals"
                        className={
                          isOutstanding
                            ? 'nav-link nav-link-secondary text-nowrap active ps-3 pe-3 me-2'
                            : 'nav-link nav-link-secondary text-nowrap ps-3 pe-3 me-2'
                        }
                        onClick={outstandingTableHandler}
                        variant=""
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg={6} md={6} sm={6} className="bottom-table-buttons">
                  <Button
                    text="Export"
                    className="btn btn-secondary ps-4 pe-4"
                    onClick={() => setIsExport(!isExport)}
                    variant=""
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
                <Col lg={12} md={12} sm={12} className="features-table mt-2">
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
            </Col>
          </Row>
        </div>
      </Container>

      {chatBoxOpen ? (
        <>
          <div className="openNew-Chat-dashboard">
            <Row className="chatbox-row-bottom-dashboard">
              <Col lg={2} md={2} sm={2}>
                <img src={JohnCater} className="chatBox-image-john-dashboard" />
              </Col>
              <Col lg={6} md={6} sm={6} className="label-col-dashboard">
                <label className="recent-chatBox-dashboard">John Carter</label>
              </Col>
              <Col lg={4} md={4} sm={4} className="chatBox-top-icons-dashboard">
                <X size={20} onClick={() => setChatBoxOpen(!chatBoxOpen)} />
              </Col>
            </Row>

            <div className="bottom-chat-box-dashboard">
              <Row>
                <Col lg={9} md={9} sm={9} className="mb-2">
                  <TextField className="textfield-chatbox-dashboard" />
                </Col>
                <Col lg={3} md={3} sm={3} className="btm-icons-dashboard">
                  <Send size={20} />
                  <Paperclip size={20} />
                </Col>
              </Row>
            </div>
          </div>
        </>
      ) : null}

      {viewDealerModal ? (
        <ViewModal
          viewModal={viewDealerModal}
          setViewModal={setViewDealerModal}
        />
      ) : null}

      {/* {openViewModal ? (<Loader />) : null} */}
    </>
  )
}

export default Dealer
