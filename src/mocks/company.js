const SKYWILL_INFO = {
  ID: "0001",
  NAME: "(株)スカイウイル",
  LOGO_URL: "https://www.skywill.jp/img/logo.png",
};

export const getSelfCompanyBasic = () => ({
  id: SKYWILL_INFO.ID,
  name: SKYWILL_INFO.NAME,
  logo_url: SKYWILL_INFO.LOGO_URL,
});

export const fetchSelfCompanyDetail = () => ({
  id: SKYWILL_INFO.ID,
  name: SKYWILL_INFO.NAME,
  logo_url: SKYWILL_INFO.LOGO_URL,
  url: "https://www.skywill.jp/",
  post_code: "141-0001",
  address: "東京都品川区北品川5-9-11 大崎MTビル10F",
  tel: "03-5449-6090",
});
