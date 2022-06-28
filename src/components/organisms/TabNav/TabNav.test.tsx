import { fireEvent, render, screen } from "@testing-library/react";
import { TabNav } from "./TabNav";
import { TabNavItem } from "../TabNavItem/TabNavItem";


const items = [
    {label: "TOP", id: "top"},
    {label: "タイムライン", id: "time-line"},
    {label: "さがす", id: "search"},
    {label: "マイクリップ", id: "my-clip"},
]

describe("TabNav", () => {
    test("それぞれのTabNavItemが表示さている", () => {
        render(
            <TabNav defaultActiveTab="top">
                {items.map(({label, id}) => <TabNavItem id={id} key={id}>{label}</TabNavItem>)}
            </TabNav>
        )

        items.forEach(({label}) => {
            const itemElement = screen.getByText(label)
            expect(itemElement).toBeInTheDocument()
        })
    })

    test("クリックしたTabNavItemがActiveになる", () => {
        render(
            <TabNav defaultActiveTab="top">
                {items.map(({label, id}) => <TabNavItem id={id} key={id}>{label}</TabNavItem>)}
            </TabNav>
        )
        const targetElement = screen.getByText(items[2].label)

        expect(targetElement).not.toHaveStyle("border-bottom: 7px solid #C4C4C4")

        fireEvent.click(targetElement)

        expect(targetElement).toHaveStyle("border-bottom: 7px solid #C4C4C4")
    })

    test("TabNavItemのonClickが動作する", () => {
        const onClick = jest.fn()
        render(
            <TabNav defaultActiveTab="top">
                <TabNavItem id="top" onClick={onClick}>TOP</TabNavItem>
            </TabNav>
        )

        expect(onClick.call.length).toBe(1)
    })
})

