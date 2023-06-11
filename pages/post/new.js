import { useState } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../../components/AppLayout'

const NewPost = (props) => {
	const [postContent, setPostContent] = useState('')
	const handleClick = async () => {
		const response = await fetch(`/api/generatePost`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
		})
		const json = await response.json()
		console.log('RESULT: ', json.post.postContent)
		setPostContent(json.post.postContent)
	}
	return (
		<div>
			<h1>NewPost</h1>
			<button type="submit" className="btn" onClick={handleClick}>
				Generate
			</button>
			<div className="max-w-screen-sm p-10" dangerouslySetInnerHTML={{__html: postContent}} />
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
