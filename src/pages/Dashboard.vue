<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <router-link :to="{path: stats.path}">
              <i :class="stats.footerIcon" ></i> {{stats.footerText}}
            </router-link>

          </div>
        </stats-card>
      </div>
    </div>

    <!--Notification table-->
    <div class="row">
      <div class="col-12">
        <card class="card" title="My Notice Board" sub-title="Upcoming activities">
          <div class="table-full-width table-responsive">
            <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">

            </paper-table>
          </div>
        </card>
      </div>

    </div>

    <!-- Upcoming Lectures -->
    <div class="row">
      <div class="col-md-6 col-12">
        <card title="CIS 7008 - Next Lecture" sub-title="04-04-2021">
          <div class="lecture content" style="padding: 20px">

            <div class="row" v-for="(info, index) in nextLecture1" :key="index">
              <div class="col-md-4">
                <h5>{{info.title}}</h5>
              </div>
              <div class="col-md-8">
                <p>{{info.subTitle}}</p>
              </div>
            </div>

          </div>

        </card>
      </div>

      <div class="col-md-6 col-12">
        <card title="CIS 7015 - Next Lecture" sub-title="04-04-2021">
          <div class="lecture content" style="padding: 20px">

            <div class="row" v-for="(info, index) in nextLecture2" :key="index">
              <div class="col-md-4">
                <h5>{{info.title}}</h5>
              </div>
              <div class="col-md-8">
                <p>{{info.subTitle}}</p>
              </div>
            </div>

          </div>

        </card>
      </div>

    </div>

  </div>
</template>
<script>
  import { PaperTable } from "@/components";
  import { StatsCard, ChartCard } from "@/components/index";
  import Chartist from 'chartist';

  const tableColumns = ["id", "Type", "Notice", "Date"];
  const tableData = [
    {
      id: 1,
      type: "payment",
      notice: "make sure to settle the due payments",
      date: "02/04/2021"
    },
    {
      id: 2,
      type: "assignment",
      notice: "CIS7028 - Information Security And Document Management assignment submission date coming up",
      date: "04/04/2021"
    },
    {
      id: 3,
      type: "assignment",
      notice: "CIS7015 - Team Software Development Project interim presentation date coming up",
      date: "04/04/2021"
    },
    {
      id: 4,
      type: "assignment",
      notice: "CIS7008 - Technology Project Management assignment submission date coming up",
      date: "01/05/2021"
    },
    {
      id: 5,
      type: "assignment",
      notice: "CIS7015 - Team Software Development Project final presentation date coming up",
      date: "01/05/2021"
    }
  ];

  export default {
  components: {
    StatsCard,
    ChartCard,
    PaperTable
  },

  data() {
    return {
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
      },
      nextLecture1: [
        {
          title: "Module",
          subTitle: "Technology Project Management"
        },
        {
          title: "Session",
          subTitle: "08"
        },
        {
          title: "Time",
          subTitle: "8.30 – 12.30"
        },
        {
          title: "Join Link",
          subTitle: "Link"
        },
        {
          title: "Materials",
          subTitle: "Link"
        },
      ],
      nextLecture2: [
        {
          title: "Module",
          subTitle: "Team Software Development Project"
        },
        {
          title: "Session",
          subTitle: "08"
        },
        {
          title: "Time",
          subTitle: "13.30 – 17.30"
        },
        {
          title: "Join Link",
          subTitle: "Link"
        },
        {
          title: "Materials",
          subTitle: "Link"
        },
      ],
      statsCards: [
        {
          type: "info",
          icon: "ti-eye",
          title: "Active Course Modules",
          value: "2",
          footerText: "view more",
          footerIcon: "ti-angle-double-down",
          path: "/course-modules"
        },
        {
          type: "warning",
          icon: "ti-alarm-clock",
          title: "Pending Assignments",
          value: "3",
          footerText: "view more",
          footerIcon: "ti-angle-double-down",
          path: "/assignments"
        },
        {
          type: "danger",
          icon: "ti-time",
          title: "Due Payments",
          value: "1",
          footerText: "view more",
          footerIcon: "ti-angle-double-down",
          path: "/payments"
        },
        {
          type: "danger",
          icon: "ti-alert",
          title: "Penalty",
          value: "1",
          footerText: "view more",
          footerIcon: "ti-angle-double-down",
          path: "/payments"
        }
      ]
    };
  }
};

</script>
<style>
</style>
