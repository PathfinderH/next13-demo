/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-08 20:08:32
 * @LastEditTime: 2022-12-08 20:09:45
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
import React from 'react'
import Search from './Search'

export default function layout({children}:{children:React.ReactNode}) {
  return (
	  <main className='flex space-x-4 divide-x-2'>
		  <div>
			  <h1>Search</h1>
		  </div>
		  <div className='flex-1 pl-5'>
			  <Search />
			  <div>{ children}</div>
		  </div>
</main>
  )
}
