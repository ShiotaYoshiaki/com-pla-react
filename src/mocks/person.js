const SHIOTA_INFO = {
  id: "111222",
  company_id: "1",
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
  // lang: "japanese",
  email: "shiota.yosiaki.0904@gmail.com",
  tel: {
    private: "09055623814",
    self_company: "",
    client_company: "",
  },
  sns: {
    twitter: "https://twitter.com/kikumata_marbin",
    instagram: "https://www.instagram.com/yoshiaki.shiota/",
    facebook: "https://www.facebook.com/Shiota.Yoshiaki",
  },
  introduce: {
    self: "お世話になっております。塩田佳明と申します。CAにて楽しくプロジェクトに参画している毎日を送っております。もしサポートできることがあればお気軽にメッセージください。よろしくお願いいたします。",
    others: [""],
  },
  organization: {
    position: "CAリーダー/MENTA23位",
    list: [
      {
        id: "666777",
        name: "Cloud App Unit",
      },
      {
        id: "494949",
        name: "テプシス開発メンバー",
      },
    ],
  },
  projects: [
    {
      id: "888999",
      name: "座席管理",
      desc: "DX推進を目標に、フリーアドレスの座席を簡単に予約できるアプリの開発を行う",
      thumbnail_url: "",
      isAdmin: true,
    },
    {
      id: "888997",
      name: "日次勤怠",
      desc: "DX推進の一貫として、日次勤怠を行うアプリの開発を行う",
      thumbnail_url: "",
      isAdmin: false,
    },
    {
      id: "888998",
      name: "インフラ復旧",
      desc: "DX推進の一貫として、問題があるインフラを一般使用者からエスカレーションできるアプリを開発する",
      thumbnail_url: "",
      isAdmin: false,
    },
  ],
  conversations: [
    {
      person_id: "222333",
      person_name: "茂木稜恭",
      person_thumbnail_url: "",
    },
  ],
};

export const getSelfPerson = () => ({
  id: SHIOTA_INFO.id,
  name: SHIOTA_INFO.name.basic,
  thumbnail_url: SHIOTA_INFO.thumbnail.url,
  position: SHIOTA_INFO.organization.position,
});

export const fetchSelfDetailPerson = () => SHIOTA_INFO;
