import { Meta, Story } from '@storybook/react';

import React from 'react';

import { Button, IButtonProps } from '../components/ui/elements/button';

export default {
    title: 'UI/Elements/Button',
    component: Button,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        color: {
            control: 'color'
        },
        children: {
            control: 'text'
        }
    },
    parameters: {
        actions: {
            handles: ['click']
        }
    }
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Active = Template.bind({});
export const Inactive = Template.bind({});

const buttonStype = { padding: '10px', margin: '5px', borderRadius: '5px', paddingTop: '10px' };

const buttonProps: IButtonProps = { isActive: true, backgroundColor: 'black', color: 'white', children: 'Hello World!!!', style: buttonStype, onClick: () => alert('Hello World!!!') };

Active.args = { ...buttonProps };
Inactive.args = { ...buttonProps, isActive: false };
