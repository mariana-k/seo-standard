import { useState } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../../components/AppLayout'

const NewPost = (props) => {
	const [postContent, setPostContent] = useState()
	const handleClick = async () => {
		const response = await fetch(`/api/generatePost`, {
			method: 'POST',
			headers: {
			  'content-type': 'application/json',
			},
			
		  });
		  const json = await response.json();
		  console.log('RESULT: ', json);
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
