import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';

export default {
    title: 'atoms/Divider',
    component: Divider,
} as ComponentMeta<typeof Divider>;


const Template: ComponentStory<typeof Divider> = () => {
    return (
        <Divider />
    )
}

export const Dafult = Template.bind({});
