
/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-08 20:08:41
 * @LastEditTime: 2022-12-08 20:24:34
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
'use client'

import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'

export default function Search() {
	const [search, setSearch] = useState("")
	const router = useRouter()
	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSearch("")
		router.push(`/search/${search}`)
	}

	return (
		<form onSubmit={(e)=>handleSearch(e)}>
			<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
			<button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-lg'>Search</button>
		</form>
	)
}
