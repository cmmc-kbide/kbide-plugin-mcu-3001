module.exports = [
    {
        name: "OPT3001",
        blocks: [
            {
                xml:
                    `<block type="opt3001">
                        <value name="OPT3001SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="OPT3001SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="getlux">
                     </block>`
            }
        ]
    }
];