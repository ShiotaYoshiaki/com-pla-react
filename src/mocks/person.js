const SHIOTA_INFO = {
  id: "111222",
  name: {
    basic: "塩田佳明",
    japanese: {
      family: "しおた",
      first: "よしあき",
    },
    kanji: {
      family: "塩田",
      first: "佳明",
    },
    english: {
      family: "shiota",
      first: "yoshiaki",
    },
  },
  thumbnail: {
    url: "https://pbs.twimg.com/profile_images/1414977704378585098/uJI6Tpog_400x400.jpg",
  },
  lang: "japanese",
  email: "shiota.yosiaki.0904@gmail.com",
  sns: {
    twitter: "",
    instagram: "",
    facebook: "",
  },
  projects: [
    {
      id: "888999",
      name: "座席管理",
      desc: "DX推進を目標に、フリーアドレスの座席を簡単に予約できるアプリの開発を行う",
      thumbnail_url: "",
    },
    {
      id: "888997",
      name: "日次勤怠",
      desc: "DX推進の一貫として、日次勤怠を行うアプリの開発を行う",
      thumbnail_url: "",
    },
    {
      id: "888998",
      name: "インフラ復旧",
      desc: "DX推進の一貫として、問題があるインフラを一般使用者からエスカレーションできるアプリを開発する",
      thumbnail_url: "",
    },
  ],
};

export const getSelfPerson = () => ({
  id: SHIOTA_INFO.id,
  name: SHIOTA_INFO.name.basic,
  thumbnail_url: SHIOTA_INFO.thumbnail.url,
});

export const fetchSelfDetailPerson = () => ({
  id: SHIOTA_INFO.id,
  name: SHIOTA_INFO.name,
});
