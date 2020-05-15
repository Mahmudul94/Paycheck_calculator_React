import React, { Component } from "react";

import "./header.css";

import {
    Container,
    MenuItem,
    FormControl,
    Select,
    Box,
    TextField,
    Radio,
    Checkbox,
    NativeSelect,
} from "@material-ui/core";

export default class TopShelf extends Component {
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
                <div className="gross">
                    <FormControl>
                        <div>
                            <strong > <a href="#">Gross Pay </a> </strong>

                            <TextField id="outlined-basic" label="" variant="outlined" />
                        </div>
                    </FormControl>
                    <Select>
                        <MenuItem value="">Annualy</MenuItem>
                        <MenuItem>Pay Per Period</MenuItem>
                    </Select>
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Gross Salary YTD</a>
                    </strong>
                    <TextField id="outlined-basic" label="" variant="outlined" />
          (optional)
        </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Pay Frequency</a>
                    </strong>
                    <Select>
                        <MenuItem value="">Daily</MenuItem>
                        <MenuItem>Weekly</MenuItem>
                        <MenuItem>Bi-Weekly</MenuItem>
                        <MenuItem>Semi-Monthly</MenuItem>
                        <MenuItem>Monthly</MenuItem>
                        <MenuItem>Quarterly</MenuItem>
                        <MenuItem>Semi-Annual</MenuItem>
                        <MenuItem>Annual</MenuItem>
                    </Select>
                </div>

                <div>
                    <strong>
                        {" "}
                        <a href=" ">Federal Filing Status</a>
                    </strong>
                    <Select>
                        <MenuItem value="">Single</MenuItem>
                        <MenuItem value="">Married</MenuItem>
                        <MenuItem value="">Head of Household</MenuItem>
                        <MenuItem value="">
                            Married But Withhold at the Higher Single Rate
            </MenuItem>
                    </Select>
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" "># of Fedaral Allowances</a>
                    </strong>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Additional Federal Withholding</a>
                    </strong>
          $ <TextField id="outlined-basic" label="" variant="outlined" />
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Round Federal Withholding</a>
                    </strong>
                    <Radio value="Y" name="radio-button-demo" /> Yes
          <Radio value="Y" name="radio-button-demo" /> No
        </div>
                <div>
                    <strong>
                        {" "}
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
                    <Select>
                        <MenuItem value="">Single</MenuItem>
                        <MenuItem value="">Married</MenuItem>
                        <MenuItem value="">Head of Household</MenuItem>
                        <MenuItem value="">
                            Married But Withhold at the Higher Single Rate
            </MenuItem>
                    </Select>
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Allowances</a>
                    </strong>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">Additional State W/H</a>
                    </strong>
          $ <TextField id="outlined-basic" label="" variant="outlined" />
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
                    <Select>
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value=""></MenuItem>
                        <MenuItem value=""></MenuItem>
                        <MenuItem value=""></MenuItem>
                    </Select>
                </div>
                <div>
                    <strong>
                        {" "}
                        <a href=" ">NYC Allowances</a>
                    </strong>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                </div>
            </div>
        );
    }
}
