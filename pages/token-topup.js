import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { AppLayout } from '../components/AppLayout'

const TokenTopup = () => {
	return <div>TokenTopup</div>
}
TokenTopup.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>
}
export default TokenTopup
export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	}
})
