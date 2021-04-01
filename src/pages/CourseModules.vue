<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>

      <div class="col-12">
        <card :title="table2.title" :subTitle="table2.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table2.data" :columns="table2.columns">

            </paper-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Semester", "Code", "Name", "Date", "Duration"];
const tableData1 = [
  {
    id: 1,
    semester: "Y1 S2",
    code: "CIS7028",
    name: "Information Security and Document Management",
    date: "04-01-2021",
    duration: "2",
  },
  {
    id: 2,
    semester: "Y1 S2",
    code: "CIS7015",
    name: "Team Software Development Project",
    date: "04-01-2021",
    duration: "2",
  },
  {
    id: 3,
    semester: "Y1 S2",
    code: "CIS7008",
    name: "Technology Project Management",
    date: "04-01-2021",
    duration: "2",
  }
];

const tableData2 = [
  {
    id: 1,
    semester: "Y1 S3",
    code: "CIS7031",
    name: "Programming for Data Analysis",
    date: "06-01-2021",
    duration: "2",
  },
  {
    id: 2,
    semester: "Y1 S3",
    code: "CIS7090",
    name: "End User Computing Risk Management",
    date: "06-01-2021",
    duration: "2",
  },
  {
    id: 3,
    semester: "Y1 S3",
    code: "CIS7088",
    name: "Geospatial Analysis",
    date: "06-01-2021",
    duration: "2",
  },
  {
    id: 4,
    semester: "Y2 S1",
    code: "CIS7004",
    name: "Research Methods for Technology Dissertations",
    date: "12-01-2021",
    duration: "2",
  },
  {
    id: 5,
    semester: "Y2 S1",
    code: "CIS7043",
    name: "Technology Dissertation",
    date: "12-01-2021",
    duration: "2",
  },
  {
    id: 6,
    semester: "Y2 S1",
    code: "CIS7011",
    name: "Dissertation",
    date: "12-01-2021",
    duration: "2",
  }
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Active Course Modules",
        subTitle: "Currently active list of modules",
        columns: [...tableColumns],
        data: [...tableData1]
      },
      table2: {
        title: "Upcoming Course Modules",
        subTitle: "Pending list of modules",
        columns: [...tableColumns],
        data: [...tableData2]
      }
    };
  }
};
</script>
<style>
</style>
