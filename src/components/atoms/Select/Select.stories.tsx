import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'atoms/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    return (
        <Select {...args} />
    )
}

export const Dafult = Template.bind({});

Dafult.args = {
    options: [
        {label: "選択肢1", value: "1"},
        {label: "選択肢1", value: "2"},
        {label: "選択肢1", value: "3"},
    ]
}
