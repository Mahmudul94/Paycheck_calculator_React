import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormControlLabel } from '@material-ui/core';
import './header.css'
import Box from '@material-ui/core/Box'

export default class TopShelf extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h3>The Paycheck Calculator</h3>
                </Container>

                <FormControl >
                    <div><b>Calculation based on:</b> <a href=""> Tax Year</a>
                        <Select className="selectBox" >
                            <MenuItem value="">
                                2015
                        </MenuItem>
                            <MenuItem >2016</MenuItem>
                            <MenuItem >2017</MenuItem>
                            <MenuItem ></MenuItem>
                        </Select>

                    For
                    <Select className="selectBox">
                            <MenuItem value=" ">
                                New York
                        </MenuItem>
                            <MenuItem >New Jearsy</MenuItem>
                            <MenuItem >Connecticuit</MenuItem>
                            <MenuItem ></MenuItem>
                        </Select></div>
                    <label><b><i>Instruction:</i></b> Click an item's name for help on contents</label>
                </FormControl>
                <div>
                    <Box component="span" m={1} >
                        General Information
                </Box>
                </div>
            </div>
        )
    }
}

