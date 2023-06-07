import Image from "next/image"
import HeroImage from '../public/hero.webp'
import { Logo } from "../components/Logo"
import Link from "next/link"
const Home = () => {
	return (
		<div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
			<Image src={HeroImage} alt="Hero" fill className="absolute" />
			<div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur"><Logo />
				<p>The AI-powered SAAS solution to generate SEO-optimized content in minutes. Get high-quality content, without sacrificing your time.</p>
				<Link className="btn" href="/post/new">Begin</Link>
			</div>
		</div>
	)
}

export default Home
