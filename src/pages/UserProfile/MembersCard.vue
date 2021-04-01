<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled course-modules">
        <li>
          <div class="row" v-for="member in modules" :key="member.code" style="padding-bottom: 5px">
            <div class="col-3">
              <div class="semester">
                <span :class="getStatusClass(member.status)">
                {{member.code}}
              </span>
              </div>
            </div>
            <div class="col-7">
              {{member.name}}
              <br>
            </div>

            <div class="col-2">
              <span :class="getStatusClass(member.status)">
                {{member.semester}}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Course Modules",
      modules: [
        {
          semester: "Y1 S2",
          code: "CIS 7015",
          name: "Team Software Development Project",
          status: "Active"
        },
        {
          semester: "Y1 S2",
          code: "CIS 7008",
          name: "Technology Project Management",
          status: "Active"
        },
        {
          semester: "Y1 S2",
          code: "CIS 7028",
          name: "Information Security and Document Management",
          status: "Offline"
        },
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Offline":
          return "text-muted";
        case "Active":
          return "text-success";
        case "Busy":
          return "text-danger";
        default:
          return "text-success";
      }
    }
  }
};
</script>
<style>
</style>
