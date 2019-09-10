#ifndef OPT3001TO_h
#define OPT3001TO_h
#include <Arduino.h>
#include <Wire.h>



class OPT3001TO {
    public:
      uint8_t MAX_ADDR = 0x44;
    OPT3001TO();
    
    int begin(uint8_t add);
            
    float getlux(void);
    
};



#endif
