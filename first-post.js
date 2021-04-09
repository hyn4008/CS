import Link from 'next/link'

export default function FirstPost() {
	return (
		<>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
			<p>Name: Hwang Yuna</p>
			<p>Student Number: 2020059670</p>
			<p>Major: Department of Information System</p>
		</>
	)
}