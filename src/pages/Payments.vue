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
  const tableColumns1 = ["Date", "Receipt", "Description", "Type", "Amount", "Status"];
  const tableData1 = [
    {
      date: "2021-03-18",
      receipt: "Draft number: 222333",
      description: "University fee / Institutional Registration fee",
      type: "Direct Transfer",
      amount: "500.00(£)",
      status: "paid",
    },
    {
      date: "2021-02-01",
      receipt: "Draft number: 111333",
      description: "University fee / Institutional Registration fee",
      type: "Direct Transfer",
      amount: "500.00(£)",
      status: "paid",
    },
    {
      date: "2020-12-06",
      receipt: "201157",
      description: "Down Payment",
      type: "Direct Transfer",
      amount: "75,000.00(Rs)",
      status: "paid",
    },
    {
      date: "2020-11-24",
      receipt: "111111",
      description: "ICBT Registration fee",
      type: "Direct Transfer",
      amount: "40,000.00(Rs)",
      status: "paid",
    }
  ];

  const tableColumns2 = ["Date", "Description", "Amount"];
  const tableData2 = [
    {
      date: "2021-04-29",
      description: "Course fee",
      amount: "60,000.00(Rs)",
    },
    {
      date: "2021-06-29",
      description: "Course fee",
      amount: "60,000.00(Rs)",
    },
    {
      date: "2021-08-29",
      description: "Course fee",
      amount: "60,000.00(Rs)",
    },
  ];

  export default {
    components: {
      PaperTable
    },
    data() {
      return {
        table1: {
          title: "Payment Details",
          subTitle: "Completed payments",
          columns: [...tableColumns1],
          data: [...tableData1]
        },
        table2: {
          title: "Next Payments",
          subTitle: "Upcoming payments",
          columns: [...tableColumns2],
          data: [...tableData2]
        }
      };
    }
  };
</script>
<style>
</style>
