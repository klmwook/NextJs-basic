import SubLayout from '@/components/SubLayout';
import { useState, useEffect } from 'react';

function Csr() {
	console.log('csr');
	const [Now, setNow] = useState('');

	useEffect(() => {
		//데이터가 연산 되는 시점은 클라이언트단에서 컴포넌트가 재 실행 될 때 마다
		setNow(performance.now());
	}, []);

	return (
		<SubLayout name={'CSR'}>
			<p>CSR 방식 테스트 페이지 입니다.</p>
			<h1>{Now}</h1>
		</SubLayout>
	);
}

export default Csr;
