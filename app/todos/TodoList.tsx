/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-07 21:41:17
 * @LastEditTime: 2022-12-07 21:43:48
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
import Link from 'next/link'
import React from 'react'

const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
	const todos: any[] = await res.json()
	console.log('this todo');
	
	return todos
}

export default async function TodoList() {
	const todos = await fetchTodos()
	return (
		<>
			{todos.map(todo => (
				<p key={todo.id}>

					<Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>

				</p>
			))}
		</>
	)
}
