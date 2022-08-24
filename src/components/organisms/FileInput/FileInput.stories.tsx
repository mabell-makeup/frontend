import { css } from "@emotion/css"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { FileInput } from "./FileInput"

export default {
    title: "organisms/FileInput",
    component: FileInput,
} as ComponentMeta<typeof FileInput>


const Template: ComponentStory<typeof FileInput> = () => {
    return (
        <div className={css({padding: 10})}>
            <FileInput />
        </div>
    )
}

export const Dafult = Template.bind({})
