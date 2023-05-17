import React, { useState } from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { Collapse, Divider, Select } from "antd";
import {
  Table,
  Button,
  Accordian,
  TextField,
  Loader,
} from "../../components/elements";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const { Panel } = Collapse;
  const [startDate, setStartDate] = useState(new Date());

  //states for tbill calculator yield to price
  const [tbillYield, setTbillYield] = useState({
    price: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    lifeRemaning: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    pvbp: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    purchasedYield: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    approximatePriceChange: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    tenor: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    yieldToMaturity: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  // states for tbill calculator price to yield
  const [yieldTbill, setYieldTbill] = useState({
    yieldMaturity: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    prices: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    lifeRemaning: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    pvbp: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    purchasedYield: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    approximatePriceChange: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    tenor: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },

    price: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  // states for pib calculator yield to price
  const [pibYieldPrice, setPibYieldPrice] = useState({
    price: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    lifeRemaning: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    pvbp: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    purchasedYield: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    approximatePriceChange: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    tenor: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    yieldToMaturity: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    duration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    Mduration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    effectiveDuration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    couponRate: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  //state for pib price to yield
  const [pibPriceYield, setPibPriceYield] = useState({
    price: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    lifeRemaning: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    pvbp: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    purchasedYield: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    approximatePriceChange: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    tenor: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    yieldToMaturity: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    duration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    Mduration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    effectiveDuration: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    couponRate: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
  });

  //Reset validation for tbill yield to price
  const resetHandler = () => {
    setTbillYield({
      ...tbillYield,
      price: {
        value: "",
      },
      lifeRemaning: {
        value: "",
      },
      pvbp: {
        value: "",
      },
      purchasedYield: {
        value: "",
      },
      approximatePriceChange: {
        value: "",
      },
      tenor: {
        value: "",
      },
      yieldToMaturity: {
        value: "",
      },
    });
    setStartDate("");
  };

  //Reset validation for tbill  price to yield
  const resetPriceHandler = () => {
    setYieldTbill({
      ...yieldTbill,
      yieldMaturity: {
        value: "",
      },

      prices: {
        value: "",
      },

      lifeRemaning: {
        value: "",
      },

      pvbp: {
        value: "",
      },

      purchasedYield: {
        value: "",
      },

      approximatePriceChange: {
        value: "",
      },

      tenor: {
        value: "",
      },

      price: {
        value: "",
      },
    });
    setStartDate("");
  };

  // reset handler for pib yield to price
  const resetPibHandler = () => {
    setPibYieldPrice({
      ...pibYieldPrice,
      price: {
        value: "",
      },
      lifeRemaning: {
        value: "",
      },
      pvbp: {
        value: "",
      },
      purchasedYield: {
        value: "",
      },
      approximatePriceChange: {
        value: "",
      },
      tenor: {
        value: "",
      },
      yieldToMaturity: {
        value: "",
      },
      duration: {
        value: "",
      },
      Mduration: {
        value: "",
      },
      effectiveDuration: {
        value: "",
      },
      couponRate: {
        value: "",
      },
    });
    setStartDate("");
  };

  // reset handler for pib yield to price
  const resetPibPriceHandler = () => {
    setPibPriceYield({
      ...pibPriceYield,
      price: {
        value: "",
      },
      lifeRemaning: {
        value: "",
      },
      pvbp: {
        value: "",
      },
      purchasedYield: {
        value: "",
      },
      approximatePriceChange: {
        value: "",
      },
      tenor: {
        value: "",
      },
      yieldToMaturity: {
        value: "",
      },
      duration: {
        value: "",
      },
      Mduration: {
        value: "",
      },
      effectiveDuration: {
        value: "",
      },
      couponRate: {
        value: "",
      },
    });
    setStartDate("");
  };

  // validate handler for yield to price
  const tbillYieldPriceHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let decimalRegex = /^[-+]?\d+(\.\d{0,4})?$/;
    let decimalRegexPoint = /^[-+]?\d+(\.\d{0,9})?$/;
    let alphaNumericRegex = /^[\w\s]+$/;

    if (name === "price" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          price: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "price" && value === "") {
      setTbillYield({
        ...tbillYield,
        price: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "lifeRemaning" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setTbillYield({
          ...tbillYield,
          lifeRemaning: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "lifeRemaning" && value === "") {
      setTbillYield({
        ...tbillYield,
        lifeRemaning: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "pvbp" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          pvbp: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "pvbp" && value === "") {
      setTbillYield({
        ...tbillYield,
        pvbp: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "purchasedYield" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          purchasedYield: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "purchasedYield" && value === "") {
      setTbillYield({
        ...tbillYield,
        purchasedYield: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "approximatePriceChange" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          approximatePriceChange: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "approximatePriceChange" && value === "") {
      setTbillYield({
        ...tbillYield,
        approximatePriceChange: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "tenor" && value !== "" && alphaNumericRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          tenor: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "tenor" && value === "") {
      setTbillYield({
        ...tbillYield,
        tenor: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (
      name === "yieldToMaturity" &&
      value !== "" &&
      decimalRegex.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setTbillYield({
          ...tbillYield,
          yieldToMaturity: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "yieldToMaturity" && value === "") {
      setTbillYield({
        ...tbillYield,
        yieldToMaturity: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }
  };

  //validate handler for price to yield
  const tbillPriceYieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let decimalRegex = /^[-+]?\d+(\.\d{0,4})?$/;
    let decimalRegexPoint = /^[-+]?\d+(\.\d{0,9})?$/;
    let alphaNumericRegex = /^[\w\s]+$/;

    if (name === "yieldMaturity" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      // let valueCheck = value.replace(/[^\d]/g, "");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          yieldMaturity: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "yieldMaturity" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        yieldMaturity: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "prices" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          prices: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "prices" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        prices: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "lifeRemaning" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setYieldTbill({
          ...yieldTbill,
          lifeRemaning: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "lifeRemaning" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        lifeRemaning: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "pvbp" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          pvbp: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "pvbp" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        pvbp: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "purchasedYield" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          purchasedYield: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "purchasedYield" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        purchasedYield: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "approximatePriceChange" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          approximatePriceChange: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "approximatePriceChange" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        approximatePriceChange: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "tenor" && value !== "" && alphaNumericRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          tenor: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "tenor" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        tenor: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "yieldToMaturity" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setTbillYield({
          ...tbillYield,
          yieldToMaturity: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "yieldToMaturity" && value === "") {
      setTbillYield({
        ...tbillYield,
        yieldToMaturity: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "price" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setYieldTbill({
          ...yieldTbill,
          price: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "price" && value === "") {
      setYieldTbill({
        ...yieldTbill,
        price: { value: "", errorMessage: "", errorStatus: false },
      });
    }
  };

  //validate handler for pib yield to price
  const pibYieldPriceHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let decimalRegex = /^[-+]?\d+(\.\d{0,4})?$/;
    let decimalRegexPoint = /^[-+]?\d+(\.\d{0,9})?$/;
    let alphaNumericRegex = /^[\w\s]+$/;

    if (name === "price" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          price: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "price" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        price: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "lifeRemaning" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          lifeRemaning: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "lifeRemaning" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        lifeRemaning: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "couponRate" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          couponRate: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "couponRate" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        couponRate: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "pvbp" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          pvbp: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "pvbp" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        pvbp: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "duration" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          duration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "duration" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        duration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "Mduration" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          Mduration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "Mduration" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        Mduration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "effectiveDuration" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          effectiveDuration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "effectiveDuration" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        effectiveDuration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "purchasedYield" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          purchasedYield: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "purchasedYield" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        purchasedYield: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "approximatePriceChange" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          approximatePriceChange: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "approximatePriceChange" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        approximatePriceChange: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "tenor" && value !== "" && alphaNumericRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          tenor: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "tenor" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        tenor: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (
      name === "yieldToMaturity" &&
      value !== "" &&
      decimalRegex.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibYieldPrice({
          ...pibYieldPrice,
          yieldToMaturity: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "yieldToMaturity" && value === "") {
      setPibYieldPrice({
        ...pibYieldPrice,
        yieldToMaturity: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }
  };

  // validation handler fot pib price to yield
  const pibPriceYieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let decimalRegex = /^[-+]?\d+(\.\d{0,4})?$/;
    let decimalRegexPoint = /^[-+]?\d+(\.\d{0,9})?$/;
    let alphaNumericRegex = /^[\w\s]+$/;

    if (name === "price" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          price: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "price" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        price: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "lifeRemaning" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          lifeRemaning: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "lifeRemaning" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        lifeRemaning: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "couponRate" && value !== "") {
      console.log(value, "loginIDloginIDloginID");
      let valueCheck = value.replace(/[^\d]/g, "");
      if (valueCheck !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          couponRate: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "couponRate" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        couponRate: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "pvbp" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          pvbp: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "pvbp" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        pvbp: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "duration" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          duration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "duration" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        duration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "Mduration" && value !== "" && decimalRegexPoint.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          Mduration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "Mduration" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        Mduration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "effectiveDuration" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          effectiveDuration: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "effectiveDuration" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        effectiveDuration: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "purchasedYield" && value !== "" && decimalRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          purchasedYield: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "purchasedYield" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        purchasedYield: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (
      name === "approximatePriceChange" &&
      value !== "" &&
      decimalRegexPoint.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          approximatePriceChange: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "approximatePriceChange" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        approximatePriceChange: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (name === "tenor" && value !== "" && alphaNumericRegex.test(value)) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          tenor: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "tenor" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        tenor: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }

    if (
      name === "yieldToMaturity" &&
      value !== "" &&
      decimalRegex.test(value)
    ) {
      console.log(value, "loginIDloginIDloginID");
      if (value !== "") {
        setPibPriceYield({
          ...pibPriceYield,
          yieldToMaturity: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "yieldToMaturity" && value === "") {
      setPibPriceYield({
        ...pibPriceYield,
        yieldToMaturity: {
          value: "",
          errorMessage: "",
          errorStatus: false,
        },
      });
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="mt-0">
          <Col lg={11} md={11} sm={11}>
            <Collapse
              size="small"
              expandIcon={false}
              className={styles["accodion-header-title"]}
            >
              <Panel
                showArrow={false}
                header={
                  <label className={styles["panel-header-text"]}>
                    TBill Calculator
                  </label>
                }
                key="1"
              >
                <>
                  <div>
                    <h1 className={styles["heading-price"]}>Yield To Price</h1>
                  </div>

                  <div className={styles["heading-paper"]}>
                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Select Bond
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-3">
                        <Select
                          className={styles["select-field-calculator"]}
                          value="TBill3M15122022"
                        />
                      </Col>

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          name="price"
                          placeholder="99.9730"
                          value={tbillYield.price.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Settlement Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-4">
                        <DatePicker
                          placeholder="Select Date"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className={styles["datepickerfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Life Remaning
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          name="lifeRemaning"
                          placeholder="5"
                          value={tbillYield.lifeRemaning.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center  mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Maturity Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-4">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className={styles["datepickerfields-calculator"]}
                        />
                      </Col>

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          PVBP
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="0.00014"
                          name="pvbp"
                          value={tbillYield.pvbp.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Purchased Yield %
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="15.9999"
                          name="purchasedYield"
                          value={tbillYield.purchasedYield.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Approximate Price Change
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="-0.01232"
                          name="approximatePriceChange"
                          value={tbillYield.approximatePriceChange.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Tenor
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="3 months"
                          name="tenor"
                          value={tbillYield.tenor.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end  mt-3"
                      >
                        <label className={styles["yield-to-price-labels"]}>
                          Yield To Maturity %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="6.06"
                          name="yieldToMaturity"
                          value={tbillYield.yieldToMaturity.value}
                          onChange={tbillYieldPriceHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col
                        lg={5}
                        md={5}
                        sm={5}
                        className="d-flex justify-content-start"
                      >
                        <p className={styles["interpolated-text"]}>
                          Interpolated PKRV Rates = 16.06
                        </p>
                      </Col>
                      <Col lg={7} md={7} sm={7} />
                    </Row>
                  </div>

                  <div>
                    <Row className={styles["bottom-row-background"]}>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          text="Calculate"
                          className={styles["calculate-btn"]}
                        />
                      </Col>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-start"
                      >
                        <Button
                          text="Reset"
                          className={styles["reset-btn"]}
                          onClick={resetHandler}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <h1 className={styles["heading-price-to-yield"]}>
                      Price To Yield
                    </h1>
                  </div>

                  <div className={styles["heading-paper"]}>
                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-4"
                      >
                        <label className={styles["slect-bond-p-to-y"]}>
                          Select Bond
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-3">
                        <Select
                          value="TBill3M15122022"
                          className={styles["select-field-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Yield To Maturity %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="6.06"
                          name="yieldMaturity"
                          value={yieldTbill.yieldMaturity.value}
                          onChange={tbillPriceYieldHandler}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Settlement Date
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5} className="mt-4">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className={styles["datepickerfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={1} md={1} sm={1} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="99.7805"
                          name="prices"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.prices.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Life Remaning
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="5"
                          name="lifeRemaning"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.lifeRemaning.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Maturity Date
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5} className="mt-4">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className={styles["datepickerfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          PVBP
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="0.00014"
                          name="pvbp"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.pvbp.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Purchased Yield %
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="15.9999"
                          name="purchasedYield"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.purchasedYield.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-center mt-3"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Approximate Price Change
                        </label>
                      </Col>

                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="-0.01367"
                          name="approximatePriceChange"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.approximatePriceChange.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      {/* <Col lg={2} md={2} sm={2} /> */}

                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Tenor
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="3 Months"
                          name="tenor"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.tenor.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        lg={1}
                        md={1}
                        sm={1}
                        className="d-flex justify-content-end mt-4"
                      >
                        <label className={styles["maturity-bond-p-to-y"]}>
                          Price
                        </label>
                      </Col>
                      <Col lg={5} md={5} sm={5}>
                        <TextField
                          placeholder="99.7805"
                          name="price"
                          onChange={tbillPriceYieldHandler}
                          value={yieldTbill.price.value}
                          className={styles["alltextfields-calculator"]}
                        />
                      </Col>
                      <Col lg={6} md={6} sm={6} />
                    </Row>
                  </div>

                  <div>
                    <Row className={styles["bottom-row-background"]}>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          text="Calculate"
                          className={styles["calculate-btn"]}
                        />
                      </Col>
                      <Col
                        lg={6}
                        md={6}
                        sm={6}
                        className="d-flex justify-content-start"
                      >
                        <Button
                          text="Reset"
                          onClick={resetPriceHandler}
                          className={styles["reset-btn"]}
                        />
                      </Col>
                    </Row>
                  </div>
                </>
              </Panel>
            </Collapse>

            <Collapse
              size="small"
              showArrow={false}
              expandIcon={false}
              className={styles["accodion-header-title-two"]}
            >
              <Panel
                showArrow={false}
                header={
                  <label className={styles["panel-header-text"]}>
                    PIB Calculator
                  </label>
                }
                key="1"
              >
                <div>
                  <h1 className={styles["heading-price"]}>Yield To Price</h1>
                </div>

                <div className={styles["heading-paper"]}>
                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>
                        Select Bond
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select
                        value="PIB3M151RK022"
                        className={styles["select-field-calculator"]}
                      />
                    </Col>
                    {/* <Col lg={2} md={2} sm={2} /> */}

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Frequency</label>
                    </Col>
                    <Col
                      lg={5}
                      md={5}
                      sm={5}
                      className="d-flex justify-content-start mt-4"
                    >
                      <Form>
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Quarterly`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Semi Annually`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Annally`}
                        />
                      </Form>
                      {/* <TextField
                            className={styles["alltextfields-calculator"]}
                          /> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Settlement Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-4">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={styles["datepickerfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Price</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        name="price"
                        placeholder="93.7443"
                        value={pibYieldPrice.price.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Maturity Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-4">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={styles["datepickerfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Life Remaning
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="253"
                        name="lifeRemaning"
                        value={pibYieldPrice.lifeRemaning.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Coupon Rate %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="7"
                        name="couponRate"
                        value={pibYieldPrice.couponRate.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>PVBP</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.006"
                        name="pvbp"
                        value={pibYieldPrice.pvbp.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Tenor</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="3 Years"
                        name="tenor"
                        value={pibYieldPrice.tenor.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.67821"
                        name="duration"
                        value={pibYieldPrice.duration.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Day Count</label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select
                        value="Actual/365"
                        className={styles["select-field-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>M Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.67821"
                        name="Mduration"
                        value={pibYieldPrice.Mduration.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Yield To Maturity %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="16.7833"
                        name="yieldToMaturity"
                        value={pibYieldPrice.yieldToMaturity.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Effective Duration
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="44.66548"
                        name="effectiveDuration"
                        value={pibYieldPrice.effectiveDuration.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start mt-3"
                    >
                      <p className={styles["interpolated-text-bottom"]}>
                        Interpolated PKRV Rates = 16.06
                      </p>
                    </Col>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Approximate Price Change
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="-0.63578"
                        name="approximatePriceChange"
                        value={pibYieldPrice.approximatePriceChange.value}
                        onChange={pibYieldPriceHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row className={styles["bottom-row-background"]}>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-end"
                    >
                      <Button
                        text="Calculate"
                        className={styles["calculate-btn"]}
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start"
                    >
                      <Button
                        text="Reset"
                        onClick={resetPibHandler}
                        className={styles["reset-btn"]}
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <h1 className={styles["heading-price-to-yield"]}>
                    Price To Yield
                  </h1>
                </div>

                <div className={styles["heading-paper"]}>
                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>
                        Select Bond
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select
                        value="PIB3M151RK022"
                        className={styles["select-field-calculator"]}
                      />
                    </Col>
                    {/* <Col lg={2} md={2} sm={2} /> */}

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Frequency</label>
                    </Col>
                    <Col
                      lg={5}
                      md={5}
                      sm={5}
                      className="d-flex justify-content-start mt-4"
                    >
                      <Form>
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Quarterly`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Semi Annually`}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="group1"
                          label={`Annally`}
                        />
                      </Form>
                      {/* <TextField
                            className={styles["alltextfields-calculator"]}
                          /> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Settlement Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-4">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={styles["datepickerfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Yield To Maturity %
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="16.8462"
                        name="yieldToMaturity"
                        value={pibPriceYield.yieldToMaturity.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Maturity Date
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-4">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className={styles["datepickerfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Life Remaning
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="6"
                        name="lifeRemaning"
                        value={pibPriceYield.lifeRemaning.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Coupon Rate %
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="16"
                        name="couponRate"
                        value={pibPriceYield.couponRate.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>PVBP</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.006"
                        name="pvbp"
                        value={pibPriceYield.pvbp.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Tenor</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="3 Years"
                        name="tenor"
                        value={pibPriceYield.tenor.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.67821"
                        name="duration"
                        value={pibPriceYield.duration.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Day Count</label>
                    </Col>

                    <Col lg={5} md={5} sm={5} className="mt-3">
                      <Select
                        value="Actual365"
                        className={styles["select-field-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>M Duration</label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="0.67821"
                        name="Mduration"
                        value={pibPriceYield.Mduration.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-4"
                    >
                      <label className={styles["PIB-labels"]}>Price</label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="93.7443"
                        name="price"
                        value={pibPriceYield.price.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>

                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Effective Duration
                      </label>
                    </Col>
                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="44.66548"
                        name="effectiveDuration"
                        value={pibPriceYield.effectiveDuration.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} sm={6}></Col>
                    <Col
                      lg={1}
                      md={1}
                      sm={1}
                      className="d-flex justify-content-end mt-3"
                    >
                      <label className={styles["PIB-labels"]}>
                        Approximate Price Change
                      </label>
                    </Col>

                    <Col lg={5} md={5} sm={5}>
                      <TextField
                        placeholder="-0.63578"
                        name="approximatePriceChange"
                        value={pibPriceYield.approximatePriceChange.value}
                        onChange={pibPriceYieldHandler}
                        className={styles["alltextfields-calculator"]}
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <Row className={styles["bottom-row-background"]}>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-end"
                    >
                      <Button
                        text="Calculate"
                        className={styles["calculate-btn"]}
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={6}
                      className="d-flex justify-content-start"
                    >
                      <Button
                        text="Reset"
                        onClick={resetPibPriceHandler}
                        className={styles["reset-btn"]}
                      />
                    </Col>
                  </Row>
                </div>
              </Panel>
            </Collapse>
          </Col>
          <Col lg={1} md={1} sm={1} />
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
