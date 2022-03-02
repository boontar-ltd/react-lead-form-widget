# Lead form widget for React JS
> First you need to create an account with [Boontar TV](https://boontar.tv)

## Features
 - Forms are created without code at [Boontar TV](https://boontar.tv)
 - Install the widget and start collecting applications, requests, ratings, reviews
 - Admin panel for viewing incoming requests [Boontar TV](https://boontar.tv)
 - Export requests
 - Embedded analytics
 - Integration Google Analytics
 
## Getting Started
To install the module, run the following in the command line:
```bash
npm i react-lead-form-widdget --save
```
Use within your application with the following line of JavaScript:
```js
const ReactLeadForm = require('react-lead-form-widdget');
```
or
```js
import ReactLeadForm from 'react-lead-form-widdget'
```
## Available props
| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| `getId` | `number` | `1` | Lead form unique ID at Boontar TV |
## Example
```js
import React, { Component } from "react";
import ReactLeadForm from 'react-lead-form-widdget'

class HelloWorld extends Component {
    render() {
        return(<ReactLeadForm getId={1} />)
    }
}
```
