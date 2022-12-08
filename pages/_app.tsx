/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-07 21:30:42
 * @LastEditTime: 2022-12-07 21:30:42
 * @LastEditors: 肖 学海 1379228273@qq.com
 */

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
