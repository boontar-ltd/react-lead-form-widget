# Lead form widget for React JS
> First you need to create an account with [Boontar TV](https://boontar.tv)

<p align="center">
  <img width="250" height="auto" src="https://boontarcloud.azureedge.net/others/react-widget-2.png" alt="Sublime's custom image"/>
</p>

## Features
 - Forms are created without code at [Boontar TV](https://boontar.tv)
 - Install the widget and start collecting requests, ratings, reviews
 - Admin panel for viewing incoming requests [Boontar TV](https://boontar.tv)
 - Export requests
 - Embedded analytics
 - Integration Google Analytics

## Admin panel
List of incoming requests in the admin panel [Boontar TV](https://boontar.tv)

[![Boontar TV - Lead Form Builder](https://boontarcloud.azureedge.net/others/react-lead-form-widget.png)](https://boontarcloud.azureedge.net/others/react-lead-form-widget.png)
 
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
