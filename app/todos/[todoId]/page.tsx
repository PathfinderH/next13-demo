/*
 * @Author: 肖 学海 1379228273@qq.com
 * @Date: 2022-12-07 21:46:26
 * @LastEditTime: 2022-12-07 22:24:20
 * @LastEditors: 肖 学海 1379228273@qq.com
 */
import React from 'react'
type PageProps = {
	params: {
		todoId: string;
	}
}
const fetchTodo = async (todoId: string) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId,
		{
			next: { revalidate: 60 }
		}
	)
	const todo: any = await res.json()
	return todo
}
export default async function TodoPage({ params }: PageProps) {
	const todo = await fetchTodo(params.todoId)
	return (
		<div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
			<p>
				#{todo.id}:{todo.title}
			</p>
			<p>
				Completed:{todo.completed ? 'YES' : 'NO'}
			</p>
			<p className='border-t border-black mt-5 text-right'>
				By:{todo.userId}
			</p>
		</div>
	)
}
