import { css } from "@emotion/css"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Icon } from "./Icon"

export default {
    title: "atoms/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
    return (
        <div className={css({padding: 10})}>
            <Icon {...args} />
        </div>
    )
}

export const Dafult = Template.bind({})

Dafult.args = {
    name: "FiCamera",
    color: "#000000",
    size: 20,
}