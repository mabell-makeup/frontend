import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserHeader } from './UserHeader';

export default {
    title: 'organisms/UserHeader',
    component: UserHeader,
} as ComponentMeta<typeof UserHeader>;


const Template: ComponentStory<typeof UserHeader> = (args) => {
    return (
        <UserHeader {...args} />
    )
}

export const Default = Template.bind({});

Default.args = {
    user: {
        name: "あり。",
        id: "@ariari",
        personalColor: "イエベ春",
        genre: "ナチュラル",
    }
}
