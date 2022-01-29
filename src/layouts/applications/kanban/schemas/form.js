export default {
  formId: "task-modal-id",
  formField: {
    content: {
      name: "content",
      label: "タスク",
      type: "text",
      errorMsg: "入力してください",
    },
    label: {
      name: "label",
      label: "ラベル",
      type: "select",
      errorMsg: "入力してください",
      options: [
        {
          name: "打ち合わせ",
          value: "mtg",
          color: "primary",
        },
        {
          name: "決議",
          value: "decide",
          color: "secondary",
        },
        {
          name: "設計",
          value: "design",
          color: "info",
        },
        {
          name: "開発",
          value: "dev",
          color: "success",
        },
        {
          name: "運用",
          value: "continue",
          color: "dark",
        },
        {
          name: "テスト",
          value: "test",
          color: "warning",
        },
      ],
    },
    detail: {
      name: "detail",
      label: "詳細",
      type: "text",
    },
    progress: {
      name: "progress",
      label: "進捗率",
      type: "number",
      placeholder: "1~100",
      errorMsg: "数値を入力してください",
    },
    urls: {
      name: "urls",
      label: "参照URL",
      type: "text",
    },
  },
};
