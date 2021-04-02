<template>
  <card class="card" title="My Profile">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="Program"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="userData.program">
            </fg-input>
          </div>
          <div class="col-md-6">

            <fg-input type="text"
                      label="Center"
                      :disabled="true"
                      placeholder="Center"
                      v-model="userData.center">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <fg-input type="text"
                      label="Title"
                      placeholder="Title"
                      v-model="userData.title">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="userData.first_name">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="userData.last_name">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Name to be appeared (on the certificate)"
                      placeholder="Name to be appeared"
                      v-model="userData.certificate_name">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Date of birth"
                      :disabled="true"
                      placeholder="dob"
                      v-model="userData.dob">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Mobile Number"
                      placeholder="+947########"
                      v-model="userData.mobile_number">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Home Number"
                      placeholder="+94112######"
                      v-model="userData.home_number">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Home Address"
                      placeholder="Address"
                      v-model="userData.address">
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Update Profile
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  props:{
    user: Object,
  },
  data() {
    return {
      userData: this.user,
      // user: {
      //   registration_number: "CL/MSCIT/12/12",
      //   university_number: "20121221",
      //   center: "ICBT Campus Colombo",
      //   program: "MSc in Information Technology (CMU)",
      //   batch: "12",
      //   title: "Mr",
      //   first_name: "Supun",
      //   last_name: "Muthu",
      //   certificate_name: "Supun Muthutantrige",
      //   gender: "Male",
      //   dob: "01 Jan 1990",
      //   mobile_number: "0765671987",
      //   home_number: "0765671987",
      //   email: "supun.test@gmail.com",
      //   address: "No. 36 De Kretser Pl, Colombo 00400"
      // }
    };
  },
  created() {
    this.$emit('clicked', this.user)
  },
  methods: {
    updateProfile() {
      // alert("Your data: " + JSON.stringify(this.user));
      this.$emit('clicked', this.user)
    }
  }
};
</script>
<style>
</style>
