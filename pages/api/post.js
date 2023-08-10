import { connectMongoDB } from '@/libs/MongoConnect';
import { Community } from '@/model/CommunitySchema';
import { Counter } from '@/model/CounterSchema';

export default async function handler(req, res) {
	//전달된 요청 방식이 POST일 때 처리 (글 저장)
	if (req.method === 'POST') {
		//client로부터 전달받은 데이터 정보 {title, content}
		const temp = req.body;

		try {
			await connectMongoDB();
			Counter.findOne({ name: 'counter' })
				.exec()
				.then((doc) => {
					//Counter 모델에서 가져온 고유번호를 client에서 넘어온 데이터에 추가
					temp.communityNum = doc.communityNum;

					//위에서 결합된 객체를 Community Model 객체로 DB에 저장
					const CommunityModel = new Community(temp);
					CommunityModel.save().then(() => {
						//글 저장이 완료되면 Counter 모델의 CommunityNum 값을 1증가
						Counter.updateOne({ name: 'counter' }, { $inc: { communityNum: 1 } })
							.exec()
							.then(() => {
								//카운터 정보 값도 갱신 완료되면 Client쪽에 저장 성공 응답 전달
								res.json({ success: true });
							})
							.catch((err) => res.json({ success: false, err: err }));
					});
				});
		} catch (err) {
			res.status(400).send({ err });
		}
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
