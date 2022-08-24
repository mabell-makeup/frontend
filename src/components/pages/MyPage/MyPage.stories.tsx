import { ComponentStory, ComponentMeta } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MyPage } from "./MyPage"

export default {
    title: "pages/MyPage",
    component: MyPage,
} as ComponentMeta<typeof MyPage>


const queryClient = new QueryClient()

const Template: ComponentStory<typeof MyPage> = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MyPage />
        </QueryClientProvider>
    )
}

export const Dafult = Template.bind({})
