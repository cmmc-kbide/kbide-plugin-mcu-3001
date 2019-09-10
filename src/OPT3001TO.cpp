#include "OPT3001TO.h"
#include <math.h>

OPT3001TO::OPT3001TO() {}

int OPT3001TO::begin(uint8_t add)
{
  MAX_ADDR = add;
  Wire.beginTransmission(MAX_ADDR);                  // I2C address of OPT3001 = 0x44
  Wire.write(0x01);                              // Config register address 0x01
  Wire.write(0xCE);
  Wire.write(0x10);                              // Write 0xCE10 to turn on sensor
  return Wire.endTransmission();
}


float OPT3001TO::getlux(void)
{
  Wire.beginTransmission(MAX_ADDR);
  Wire.write(0x00);                              // Send result register address
  Wire.endTransmission();
  Wire.requestFrom(MAX_ADDR, 2);                     // Request 2 bytes data from OPT3001
  uint16_t iData;
  uint8_t  iBuff[2];
  while (Wire.available())
  {
    Wire.readBytes(iBuff, 2);
    iData = (iBuff[0] << 8) | iBuff[1];

    //float fLux = SensorOpt3001_convert(iData);   // Calculate LUX from sensor data
    // Print it on serial terminal
  }
  uint16_t iExponent, iMantissa;
  iMantissa = iData & 0x0FFF;                 // Extract Mantissa
  iExponent = (iData & 0xF000) >> 12;         // Extract Exponent
  return iMantissa * (0.01 * pow(2, iExponent)); // Calculate final LUX

}
