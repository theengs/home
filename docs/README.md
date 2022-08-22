---
home: true
heroText: null
heroImage: logo-Theengs.png
tagline: Manufacturer agnostic BLE sensors applications and gateways
features:
- title: Interoperability
  details: From Home Assistant to ThingsBoard, Theengs is compatible with most of the IOT platforms and SmarHome controllers.
- title: Expandability
  details: Theengs can read broadcasted data from many sensors, and it is easy to add one, thanks to the use of a JSON based decoder.
- title: Open source
  details: Theengs is GPLv3 licensed so you can propose new features easily and have access to how the tools are built.
- title: Local and cloud compatible
  details: Theengs can run localy or connected to a cloud service. Your choice, not somebody else one.
- title: Powerfull decoder
  details: Theengs applications use one library to decode the sensors. Adding a device to the library makes it available for the whole ecosystem.
- title: Compact
  details: Theengs heart is developped in C++ and weight less than 1MB enabling to embed it into a wide range of boards from microcontrollers to computers.
---

![Theengs ecosystem](./img/Theengs-ecosystem.jpg)

**Theengs** is available with the hardware below, they can work independently or together, following your requirements.

## On a smartphone or tablet
The [Mobile/Tablet Android application](https://app.theengs.io) enables to read the sensors data directly.

![Theengs app](./img/Theengs-app-home-reduced-1280.png)

It can act also as a BLEtoMQTT gateway.

## On a microcontroller
Theengs is used by [OpenMQTTGateway](https://docs.openmqttgateway.com), it can be installed [easily](https://docs.openmqttgateway.com/upload/web-install.html) on an ESP32 to act as a Bluetooth to MQTT gateway.


<p align="center">
  <img src="./img/Theengs-openmqttgateway.jpg">
</p>

## On a computer
Alternatively Theengs can be used on computers and servers as a [python BLEtoMQTT gateway](https://gateway.theengs.io) for Raspberry Pi, Unix, or Windows,

<p align="center">
  <img src="./img/Theengs-gateway-raspberry-pi.jpg">
</p>

::: warning Note
All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
:::

::: slot footer
[GPLv3 Licensed](https://github.com/theengs/home/blob/main/LICENSE) | Copyright © 2022-present Theengs
:::