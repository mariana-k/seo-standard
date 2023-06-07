import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../../components/AppLayout'

const Post = () => {
	return <div>Post</div>
}

Post.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>
}

export default Post
export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	}
})
