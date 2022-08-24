import { fireEvent, render, screen } from "@testing-library/react"
import { MenuNav, MenuNavProps } from "./MenuNav"

describe("MenuNav", () => {
    const onClick1 = jest.fn()
    const onClick2 = jest.fn()
    const onClick3 = jest.fn()
    const testMenus: MenuNavProps["menus"] = [
        {title: "メニュー1", onClick: onClick1},
        {title: "メニュー2", onClick: onClick2},
        {title: "メニュー3", onClick: onClick3},
    ]

    test("メニュータイトルが表示されている", () => {
        render(<MenuNav title="タイトル" menus={testMenus} />)

        const title = screen.getByText("タイトル")
        expect(title).toBeInTheDocument()
    })

    test("メニューが表示される", () => {
        render(<MenuNav menus={testMenus} />)

        testMenus.forEach(({title}) => {
            const menu = screen.getByText(title)
            expect(menu).toBeInTheDocument()
        })
    })

    test("onClickが動作する", () => {
        render(<MenuNav menus={testMenus} />)

        testMenus.forEach(({title, onClick}) => {
            const menu = screen.getByText(title)
            fireEvent.click(menu)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(onClick.mock.calls.length).toBe(1)
        })
        
    })
})
