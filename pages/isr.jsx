import SubLayout from '@/components/SubLayout';

function Isr(props) {
	return (
		<SubLayout name={'ISR'}>
			<p>ISR 방식 테스트 페이지 입니다.</p>
			<h1>{props.now}</h1>
		</SubLayout>
	);
}

export async function getStaticProps() {
	/*
		해당 프로젝트를 빌드 시 호출
		revalidate에 지정한 시간 마다 새로 revalidate해서 새로운 pre-render-page로 재빌드 (현재 5초)	
	*/
	console.log('isr');
	return {
		props: { now: performance.now() },
		revalidate: 5,
	};
}

export default Isr;
