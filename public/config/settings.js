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
	iot_deviceType: "trafficsim",     // replace with your deviceType
	iot_deviceOrg: "6imc9v",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
		{ deviceId: "ABC", token: "D6mUKIVJkhOP&0lsvl"
 },   
		{ deviceId: "DEF", token: "&&UB(taXUKSlU6i?8)"
 },
		{ deviceId: "GHI", token: "NF(R1Po94Up9m?+qqT"
 }
	],
	iot_apiKey: "a-6imc9v-2bpmq5r8oj",    // replace with the key for a generated API token
	iot_apiToken: "sGQ&vTu_S_jy!FElu*",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }
