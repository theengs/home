# Theengs IoT Data Decoding API

## Overview

Do you find it challenging to decode IoT data payloads from raw JSON to a format that's easier to understand? 
Theengs IoT Data Decoding API is your solution. Built to simplify the complex nature of device integration and data interpretation, our API is specifically designed to enable faster device integration, smooth proof of concept execution, efficient testing, and reduction of maintenance costs.

## Why Choose Theengs IoT Data Decoding API?

**1. Streamlined Device Integration:** Our API simplifies the process of integrating IoT devices into your system, saving you time and resources. 

**2. Lowers Maintenance Costs:** The API helps to reduce the overall system maintenance cost by offering a seamless data interpretation solution.

**3. Comprehensive Device Compatibility:** Our API comes with an up-to-date catalog of compatible devices, eliminating the need for manual compatibility checks.

**4. Proven Technology:** The API is built upon Theengs technology and has been proven by thousands of users worldwide.

## Sample API Usage

Here's an example showing how raw data can be transformed into a more understandable format:

**Raw Data**

```json
{
  "id":"88:22:44:44:11:44",
  "rssi":-85,
  "servicedata":"08094411444422880104e500c6020702aa2702012d",
  "servicedatauuid":"0xfdcd"
}
```
**Decoded Data**
```json
{
  "data": {
    "id": "88:22:44:44:11:44",
    "rssi": -85,
    "servicedata": "08094411444422880104e500c6020702aa2702012d",
    "servicedatauuid": "0xfdcd",
    "brand": "ClearSensor",
    "model": "Weather Station",
    "model_id": "CXY1W",
    "type": "THBX",
    "tempc": 22.9,
    "tempf": 73.22,
    "hum": 71,
    "pres": 1015.4
  },
  "properties": {
    "properties": {
      "pres": {
        "unit": "hPa",
        "name": "pressure"
      },
      "tempc": {
        "unit": "°C",
        "name": "temperature"
      },
      "hum": {
        "unit": "%",
        "name": "humidity"
      }
    }
  }
}
```

## Try it
Do a post request to https://api.theengs.io/decoder with a json body like the example below:
```json
{
  "id": "55:99:EE:FF:33:88",
  "servicedata": "70000a01090216dd99225598eeff3388",
  "servicedatauuid": "0xfeab"
}
```
You will receive the decoded result with properties and device values.

Alternatively you can also test your raw json into our [Theengs Web Parser](https://parser.theengs.io)

::: tip
The test API is throttled per default, if you would like to have an API key to remove the API limitations see below.
:::

## Getting Started
To get started, contact us at florian@theengs.io

We look forward to simplifying your IoT data handling process with Theengs IoT Data Decoding API.
