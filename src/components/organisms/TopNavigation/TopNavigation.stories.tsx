import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopNavigation } from './TopNavigation';

export default {
    title: 'organisms/TopNavigation',
    component: TopNavigation,
} as ComponentMeta<typeof TopNavigation>;


const Template: ComponentStory<typeof TopNavigation> = () => {
    return <TopNavigation />
}

export const Dafult = Template.bind({});
