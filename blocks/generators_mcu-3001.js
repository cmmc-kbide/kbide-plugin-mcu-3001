Blockly.JavaScript['opt3001'] = function(block) {
  var variable_opt30011 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OPT30011'), Blockly.Variables.NAME_TYPE);
  var text_opt3001add = block.getFieldValue('OPT3001ADD');
  var value_opt3001sda = Blockly.JavaScript.valueToCode(block, 'OPT3001SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_opt3001scl = Blockly.JavaScript.valueToCode(block, 'OPT3001SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <OPT3001TO.h>#END

#VARIABLE
OPT3001TO ${variable_opt30011};
#END
Wire.begin(${value_opt3001sda},${value_opt3001scl});\n
${variable_opt30011}.begin(${text_opt3001add});
\n
`;
  return code;
};
Blockly.JavaScript['getlux'] = function(block) {
  var variable_opt30011 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OPT30011'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_opt30011}.getlux()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};