import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../../components/AppLayout'

const NewPost = () => {
	const handleClick = () => {
		fetch('/api/generatePost')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div>
			<h1>NewPost</h1>
			<button className="btn" onClick={handleClick}>
				Generate
			</button>
		</div>
	)
}

NewPost.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>
}

export default NewPost
export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	}
})
