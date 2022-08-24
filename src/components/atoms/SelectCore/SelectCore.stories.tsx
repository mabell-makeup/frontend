import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SelectCore } from "./SelectCore"

export default {
    title: "atoms/SelectCore",
    component: SelectCore,
} as ComponentMeta<typeof SelectCore>

const Template: ComponentStory<typeof SelectCore> = (args) => {
    return (
        <SelectCore {...args} />
    )
}

export const Dafult = Template.bind({})

Dafult.args = {
    options: [
        {label: "選択肢1", value: "1"},
        {label: "選択肢1", value: "2"},
        {label: "選択肢1", value: "3"},
    ]
}
