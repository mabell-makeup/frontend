import User from './components/atoms/User/User'
import { css } from "@emotion/css"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants/style";
import { Button } from './components/atoms/Button/Button';
import { decrement, increment } from './slices/counter';
import { useAppDispatch, useAppSelector } from './helper/store';
import { MenuNav } from './components/organisms/MenuNav/MenuNav';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';
import { ImageList } from './components/organisms/ImageList/ImageList';
import { useQueryWrapper } from './helper/reactQueryWrapper';
import { Headline } from './components/atoms/Headline/Headline';

export const App = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    const res = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/15', {
      requestOptions: { method: "GET" },
      queryKey: 'getImages',
      queryOptions: {staleTime: Infinity}
    });
  

  return (
    <div className={styles.container}>
      <Header />
      <div className={css({ gridArea: "left", padding: "40px 20px" })}>
        <MenuNav title="探す" menus={[{title: "色から探す"}, {title: "アイテムから探す"}, {title: "ジャンルから探す"}, {title: "ユーザーを探す"}]} />
      </div>
      <div className={css({ gridArea: "content" })}>
        {res.data?.message && <ImageList images={res.data.message} />}
        <User />
        <Button label="カウントアップ" onClick={() => dispatch(increment())} />
        <Button label="カウントダウン" onClick={() => dispatch(decrement())} />
        <h1>{count}</h1>
        <Headline headlineText='ヘッドライン'></Headline>
      </div>
      <div className={css({ gridArea: "right" })}>Right</div>
      <Footer />
    </div>
  );
}

const styles = {
  container: css({
    display: "grid",
    gridTemplateAreas: `
        "header header header"
        "left content right"
        "footer footer footer"
    `,
    gridTemplateRows: `${HEADER_HEIGHT} minmax(calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT}), auto) ${FOOTER_HEIGHT}`,
    gridTemplateColumns: "236px 1fr 236px"
  })
}
