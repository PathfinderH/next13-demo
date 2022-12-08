/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-07 21:31:52
 * @LastEditTime: 2022-12-07 21:35:54
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
import Link from 'next/link'
import React from 'react'

export default function Header() {
	return (
		<div className='p-5 bg-blue-500'>
			<Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-md'>Home</Link>
		</div>
	)
}
