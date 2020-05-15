import React, { Component } from "react";

import "./header.css";

import {
  Container,
  FormControl,
  Box,
  Radio,
  Checkbox,
  NativeSelect,
} from "@material-ui/core";

export default class TopShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grossPay: "",
      gPayMethod: "",
      gSalaryYTD: "",
      payFreq: "",
      fedFilingStat: "",
      numOfFedAllowances: "",
      additionalFederalWithholding: "",
      roundFederalWithholding: "",
      exemptFromFedTax: "",
      exemptFromFICATax: "",
      exemptFromMedicareTax: "",
    };

    this.onChangeGrossPay = this.onChangeGrossPay.bind(this);
  }

  onChangeGrossPay(e) {
    this.setState({
      grossPay: e.target.value,
    });

    console.log(this.state.grossPay);
  }
  render() {
    return (
      <div>
        <Container>
          <h3>The Paycheck Calculator</h3>
        </Container>

        <FormControl>
          <div>
            <b>Calculation based on:</b> <a href="./"> Tax Year</a>
            <NativeSelect className="selectBox">
              <option value="">2015</option>
              <option>2016</option>
              <option>2017</option>
              <option></option>
            </NativeSelect>
            For
            <NativeSelect className="selectBox">
              <option value=" ">New York</option>
              <option>New Jersey</option>
              <option>Connecticuit</option>
              <option></option>
            </NativeSelect>
          </div>
          <label>
            <b>
              <i>Instruction:</i>
            </b>{" "}
            Click an item's name for help on contents
          </label>
        </FormControl>
        <div className="general">
          <Box component="span" m={1}>
            General Information
          </Box>
        </div>
        <div>
          <FormControl>
            <div>
              <strong>
                {" "}
                <a href="./">Gross Pay </a>{" "}
              </strong>
              <input
                className="gross_textfield"
                type="text"
                onChange={this.onChangeGrossPay}
              ></input>
            </div>
          </FormControl>
          <NativeSelect className="gross_textfield">
            <option value=""> Annualy</option>
            <option>Pay Per Period </option>
          </NativeSelect>
        </div>
        <div>
          <strong>
            <a href=" ">Gross Salary YTD</a>
          </strong>
          <input type="text"></input>
          (optional)
        </div>
        <div>
          <strong>
            {" "}
            <a href=" ">Pay Frequency</a>
          </strong>
          <NativeSelect>
            <option value="">Daily</option>
            <option>Weekly</option>
            <option>Bi-Weekly</option>
            <option>Semi-Monthly</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Semi-Annual</option>
            <option>Annual</option>
          </NativeSelect>
        </div>

        <div>
          <strong>
            <a href=" ">Federal Filing Status</a>
          </strong>
          <NativeSelect>
            <option>Single</option>
            <option>Married</option>
            <option>Head of Household</option>
            <option>Married But Withhold at the Higher Single Rate </option>
          </NativeSelect>
        </div>
        <div>
          <strong>
            <a href=" "># of Fedaral Allowances</a>
          </strong>
          <input type="text"></input>
        </div>
        <div>
          <strong>
            <a href=" ">Additional Federal Withholding</a>
          </strong>
          $<input type="text"></input>
        </div>
        <div>
          <strong>
            <a href=" ">Round Federal Withholding</a>
          </strong>
          <Radio value="Y" name="radio-button-demo" /> Yes
          <Radio value="Y" name="radio-button-demo" /> No
        </div>
        <div>
          <strong>
            <a href=" ">I am exempt from</a>
          </strong>
          <Checkbox name="" />
          Federal Tax
          <Checkbox name="" />
          Fica
          <Checkbox name="" />
          Medicare
        </div>
        <div className="general">
          <Box component="span" m={1}>
            State and Local Information for New York
          </Box>
        </div>
        <div>
          <strong>
            {" "}
            <a href=" "> Filing Status</a>
          </strong>
          <NativeSelect>
            <option>Single</option>
            <option>Married</option>
            <option>Head of Household</option>
            <option>Married But Withhold at the Higher Single Rate</option>
          </NativeSelect>
        </div>
        <div>
          <strong>
            <a href=" ">Allowances</a>
          </strong>
          <input type="text"></input>
        </div>
        <div>
          <strong>
            {" "}
            <a href=" ">Additional State W/H</a>
          </strong>
          $<input type="text"></input>
        </div>
        <div>
          <strong>
            {" "}
            <a href=" ">NY SDI</a>
          </strong>
          <Radio value="Y" name="radio-button-demo" /> Yes
          <Radio value="Y" name="radio-button-demo" /> No
        </div>
        <div>
          <strong>
            {" "}
            <a href=" "> City Tax</a>
          </strong>
          <NativeSelect>
            <option>None</option>
            <option></option>
            <option></option>
            <option></option>
          </NativeSelect>
        </div>
        <div>
          <strong>
            <a href=" ">NYC Allowances</a>
          </strong>
          <input type="text"></input>
        </div>
      </div>
    );
  }
}
