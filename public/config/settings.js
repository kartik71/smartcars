/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation 
 *******************************************************************************/

var config = {
	iot_deviceType: vehicle,     // replace with your deviceType
	iot_deviceOrg: jdwkfn,       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "ABC", token: "FY8oxMWoi(cdy9Y2ec"
 },   
		{ deviceId: "DEF", token: "_Aw-w3u?WXn3I15(!&"
 },
		{ deviceId: "GHI", token: "_8H5XNVllHKrJ!Xn(*"
 }
	],
	iot_apiKey: "a-jdwkfn-irb0emlndu",    // replace with the key for a generated API token
	iot_apiToken: "XQ@A1(QxW5gC)jsPId",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
