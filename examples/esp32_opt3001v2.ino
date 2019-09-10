// OPT3001 with Arduino (Lux meter)
// by Varad Kulkarni <http://www.microcontrollershub.com>
// Created 28 March 2018

#include <Wire.h>
#include "OPT3001TO.h"
OPT3001TO tong;
void setup()
{
  Serial.begin(115200);                            // Initialize serial communication at 9600
  Wire.begin();                                  // Initialize Arduino in I2C master.
  tong.begin(0x44);
  Serial.println("Data received \t\t Lux");
}
void loop()
{
  Serial.println(tong.getlux());
  delay(100);
}
