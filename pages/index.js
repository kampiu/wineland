import Head from "next/head"
import styles from "../styles/Home.module.css"
import { BoxStyle } from "../assets/style/style"

export default function Home () {
	
	function test(){
		console.log(process.env)
		console.log(process.env.NEXT_PUBLIC_API)
	}
	
	return (
		<div className={ styles.container }>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			
			<BoxStyle onClick={ () => test() }/>
		</div>
	)
}
