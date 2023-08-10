import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collation: 'Community' }
);

//스키마를 적용한 모델 생성 함수를 내보냄
const Community = mongoose.model('Community', communitySchema);
export { Community };
