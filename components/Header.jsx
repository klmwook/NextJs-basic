import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
//nextjs 프레임 웍에는 기본적으로 구글 웹 폰트 시스템이 내장 되어 있음
//next 자체적으로 구글 웹 폰트의 용량을 최적화 시켜서 페이지에 적용
//비구조화할당으로 원하는 폰트 객체를 import
import { Orbitron, Noto_Sans_KR } from 'next/font/google';
//복수개의 클래스를 편하게 적용 (변수, 조건문)
import clsx from 'clsx';

//Orbitron 생성자로부터 사용할 객체를 반환 (subsets : 언어타입, weight : 사용할 폰트 굵기, preload : 사전로딩유무)
//weight 값이 등록되지 않으면 콘솔 오류
//반환된 폰트 객체 안에는 클래스명이 Property로 등록되어 있음
//해당 폰트를 사용하고자 하는 부모요소에 해당 객체의 클래스 명을 등록하면 자식 컴포넌트에서는 자유롭게 해당 폰트 사용 가능
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500'], preload: true });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '300'], preload: true });

function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		//하나의 엘리먼트 요소에 클래스명 복수 적용
		//하나의 복수개의 클래스명을 적용가능하나
		//구글 웹폰트 클래스는 복수개 적용 불가능
		<header id={styles.header} className={clsx(orbitron.className, notoSans.className)}>
			<h1>
				<Link href='/' className={currentPath === '/' ? styles.on : ''}>
					DCODELAB
				</Link>
			</h1>

			<ul id={styles.gnb}>
				<li>
					<Link href='/csr' className={currentPath === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
				<li>
					<Link href='/ssg' className={currentPath === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={currentPath === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={currentPath === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/post' className={currentPath === '/post' ? styles.on : ''}>
						POST
					</Link>
				</li>

				<li>
					<Link href='/redirect' className={currentPath === '/redirect' ? styles.on : ''}>
						REDIRECT
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
