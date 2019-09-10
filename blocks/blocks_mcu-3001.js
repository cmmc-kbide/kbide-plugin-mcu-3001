Blockly.Blocks['opt3001'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("OPT30011", null,["Plugin.OPT3001"], ["Plugin.OPT3001"]), "OPT30011")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x44"), "OPT3001ADD");
    this.appendValueInput("OPT3001SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("OPT3001SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getlux'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("OPT30011", null,["Plugin.OPT3001"], ["Plugin.OPT3001"]), "OPT30011")
        .appendField("read LUX");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};