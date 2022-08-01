import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
    title: 'atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
    children: "ボタン",
    variant: "primary",
}

export const Text = Template.bind({})

Text.args = {
    children: "ボタン",
    variant: "text",
}