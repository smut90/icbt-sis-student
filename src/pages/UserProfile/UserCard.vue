<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">{{first_name}} {{last_name}}
          <br>
          <a href="#">
            <small>@{{email}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        {{registration_number}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      registration_number: "CL/MSCIT/12/12",
      university_number: "20121221",
      center: "ICBT Campus Colombo",
      program: "MSc in Information Technology (CMU)",
      batch: "12",
      title: "Mr",
      first_name: "Supun",
      last_name: "Muthu",
      gender: "Male",
      dob: "01 Jan 1990",
      mobile_number: "0765671987",
      home_number: "0765671987",
      email: "supun.test@gmail.com",
      details: [
        {
          title: "20121221",
          subTitle: "Reg Number"
        },
        {
          title: "Male",
          subTitle: "Gender"
        },
        {
          title: "18",
          subTitle: "Batch"
        }
      ]
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
