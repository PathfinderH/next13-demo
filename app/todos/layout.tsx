/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-07 22:22:20
 * @LastEditTime: 2022-12-07 22:22:20
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
import React from 'react'
import TodoList from './TodoList'

export default function layout({children}:{children:React.ReactNode}) {
  return (
	  <div className="flex">
		  <div>
			  {/* @ts-ignore */}
			  <TodoList />
		  </div> 
		  <div className="flex-1">{ children}</div>
	</div>
  )
}
