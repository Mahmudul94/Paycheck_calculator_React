import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { NativeSelect } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import "./header.css";
import Box from "@material-ui/core/Box";

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
            <NativeSelect defaultValue="" className="selectBox">
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
            </NativeSelect>
          </div>
        </FormControl>
        <FormControl>
          <div>
            For
            <Select className="selectBox">
              <MenuItem>New York</MenuItem>
              <MenuItem>New Jearsy</MenuItem>
              <MenuItem>Connecticuit</MenuItem>
            </Select>
          </div>
        </FormControl>

        <label>
          <b>
            <i>Instruction:</i>
          </b>{" "}
          Click an item's name for help on contents
        </label>
        <div className="general">
          <Box component="span" m={1}>
            General Information
          </Box>
        </div>
      </div>
    );
  }
}
