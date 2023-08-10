import { connectMongoDB } from '@/libs/MongoConnect';

export default async function handler(req, res) {
	try {
		const DB = await connectMongoDB();
		res.status(200).send('success');
	} catch (err) {
		res.status(400).send({ err });
	}
}

/*
  데이터 저장 작업 순서
  1. 저장할 데이터의 구조에 맞게 스키마 생성
  2. api 라우터에서 스키마 적용된 모델 객체에 Client로부터 전달 받은 데이터를 바인딩 후 DB에 저장한 뒤, 응답성공 Client로 전송
    1) Client에서 Post 요청 받음
    2) 카운터 모델에서 communityNum 가져온 뒤 Client로부터 전달받은 객체와 결합
    3) 결합된 객체를 Post 모델로 저장
    4) 저장이 완료되면 다시 Counter 값을 1 증가
*/
