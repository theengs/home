---
home: true
heroText: null
title: Theengs BLE sensors applications and MQTT gateways
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

# Applications and MQTT gateways

**Theengs** is available with the hardware below. They can work independently or together, following your requirements.

## Features
|Product| Platform |Retrieve and decode broadcasts |MQTT integration| Home Assistant convention discovery| Presence detection | Display| Can connect with raw data|
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|[Theengs Bridge](https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna)|ESP32|☑️|☑️|☑️|☑️|-|☑️|
|[Theengs Plug](https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption)|ESP32|☑️|☑️|☑️|☑️|-|☑️|
|[Theengs App](https://app.theengs.io)|iOS/Android|☑️|☑️|☑️|-|☑️|-|
|[OpenMQTTGateway](https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption)|ESP32|☑️|☑️|☑️|☑️|-|☑️|
|[Theengs Gateway](https://gateway.theengs.io)|PC/Mac/Servers|☑️|☑️|☑️|☑️|-|-|

## On our bridge
The [Theengs bridge](https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna) is a powerfull  BLE to MQTT gateway for over [80 sensors](https://decoder.theengs.io/devices/devices.html). Equipped with an Ethernet port, and external antenna, ensuring an enhanced range for your BLE sensors. It supports also WiFi connectivity.

<p align="center">
  <a href="https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna">
    <img src="./img/Theengs-Bridge-ble-gateway.png">
  </a>
</p>

## On our smartplug
The [Theengs plug](https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption) is a versatile device that can serve as a BLE to MQTT gateway for over [80 sensors](https://decoder.theengs.io/devices/devices.html), as well as a smart plug with power consumption measurement and presence detection features.

<p align="center">
  <a href="https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption">
    <img src="./img/Theengs-Plug-ble-gateway.png">
  </a>
</p>

## On a smartphone or tablet
The [Mobile/Tablet Android and iOS/iPadOS application](https://app.theengs.io) enables to read the sensors data directly.

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

## Integrations
Theengs products can be integrated with smart home and IoT controllers supporting MQTT:
* [OpenHAB](https://www.openhab.org)
* [Home Assistant](https://www.home-assistant.io)
* [Domoticz](https://www.domoticz.com)
* [Jeedom](https://www.jeedom.com)
* [Node Red](https://nodered.org)
* [FHEM](https://fhem.de)

::: warning Note
All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
:::

::: slot footer
[GPLv3 Licensed](https://github.com/theengs/home/blob/main/LICENSE) | Copyright © 2023-present Theengs
:::
