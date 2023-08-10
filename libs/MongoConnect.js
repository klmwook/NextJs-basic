import mongoose from 'mongoose';

//몽고 DB접속 함수를 정의한다음 export
export default connectMongoDB = async () => {
	//해당 함수 호출 시 MongoDB접속에 성공하면 접속 성공 객체를 promise형태로 반환 값을 리턴
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}

	//위에서 성공 promise가 반환되면
	//동기적으로 몽고 DB 접속 후 접속 상태 리턴
	//해당 함수를 mongoDB를 사용해야 되는 페이지나 컴포넌트에서 호출하면 MongoDB 접속 가능
	//중요 접속 정보를 숨기기 위해서 로컬 환경변수 파일에 몽고 디비 접속 URL를 등록 후 호출
	return await mongoose.connect(process.env.MONGO_URL);
};
