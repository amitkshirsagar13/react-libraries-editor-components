import { Meta, Story } from '@storybook/react';

import React from 'react';

import { GCode, IEditor } from '../components/editors/gcode/gcode';

export default {
    title: 'UI/Component/Editor/GCode',
    component: GCode,
    argTypes: {
        gCode: {
            control: 'text'
        }
    }
} as Meta;

const Template: Story<IEditor> = (args: IEditor) => <GCode {...args} />;

export const SingleLine = Template.bind({});

const multiLineCode: string = `O0001
N5 M12
N10 T0101
N15 G0 X100 Z50
N20 M3 S600
N25 M8
N30 G1 X50 Z0 F600
N40 W-30 F200
N50 X80 W-20 F150
N60 G0 X100 Z50
N100 M13
N110 M30
N120 %`;
const buttonProps: IEditor = {
    gCode: 'N001 G001 T001 M001 X00 Y10 Z15 R02 I03 J05 "Test Line"'
};

SingleLine.args = buttonProps;

export const Scrollable = Template.bind({});

Scrollable.args = { ...buttonProps, gCode: multiLineCode, readOnly: true };
