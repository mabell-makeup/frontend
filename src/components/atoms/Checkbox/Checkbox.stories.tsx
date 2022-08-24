import { css } from "@emotion/css"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Checkbox } from "./Checkbox"

export default {
    title: "atoms/Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <div className={css({padding: 10})}>
            <Checkbox {...args} />
        </div>
    )
}

export const Dafult = Template.bind({})

Dafult.args = {
    children: "同意する"
}
