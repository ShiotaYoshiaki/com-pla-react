/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "layouts/applications/kanban/components/Card";

// Images
import officeDark from "assets/images/office-dark.jpg";
import meeting from "assets/images/meeting.jpg";
import homeDecore from "assets/images/home-decor-1.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import Category from "./Category";

export default {
  columns: [
    {
      id: uuidv4(),
      title: "未着手",
      cards: [
        {
          id: uuidv4(),
          template: "Change me to change title",
        },
        {
          id: uuidv4(),
          template: "Drag me to 'In progress' section",
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DEVELOP}
              content="アカウント一覧を作成する。デザインはここを参照する https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/#/customers/lists"
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark}
              badge={Category.PENDING}
              content="Website Design: New cards for blog section and profile details"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "処理中",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DEVELOP}
              content="カンバンを使える状態にする"
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DEVELOP}
              content="チャットのレイアウトを作る。https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/#/chats"
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.ERROR}
              content="Fix firefox errors"
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.UPDATE}
              content="Argon Dashboard PRO - React"
              attachedFiles={3}
              members={[team5, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={meeting}
              badge={Category.UPDATE}
              content="ReactJS v17 Updates"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "レビュー待ち",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.TEST}
              content="Responsive Changes"
              attachedFiles={11}
              members={[team3, team2]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.REVIEW}
              content="Change images dimension"
              progress={80}
              members={[team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.REVIEW}
              content="Update links"
              progress={60}
              attachedFiles={6}
              members={[team5, team1]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "完了",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DONE}
              content="Profileページの作成"
              members={[team5, team1, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DONE}
              content="サイドメニューのサンプル情報を置き換える"
              members={[team5, team1, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={homeDecore}
              badge={Category.DONE}
              content="Redesign for the home page"
              attachedFiles={8}
              members={[team5, team1, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={Category.DONE}
              content="Schedule winter campaign"
              attachedFiles={2}
              members={[team1, team4]}
            />
          ),
        },
      ],
    },
  ],
};
