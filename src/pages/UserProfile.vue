<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <user-card :first_name=user.first_name :last_name=user.last_name :email=user.email>

        </user-card>
        <members-card>

        </members-card>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-profile-form @clicked="onClickChild" :user=user>

        </edit-profile-form>
      </div>
    </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    EditProfileForm,
    UserCard,
    MembersCard
  },
  data() {
    return {
      user: {
        registration_number: "CL/MSCIT/12/12",
        university_number: "20121221",
        center: "ICBT Campus Colombo",
        program: "MSc in Information Technology (CMU)",
        batch: "12",
        title: "Mr",
        first_name: "Supun",
        last_name: "Muthu",
        certificate_name: "Supun Muthutantrige",
        gender: "Male",
        dob: "01 Jan 1990",
        mobile_number: "0765671987",
        home_number: "0765671987",
        email: "supun.test@gmail.com",
        address: "No. 36 De Kretser Pl, Colombo 00400"
      }
    };
  },
  methods: {
    onClickChild (value) {
      this.user = value;
    }
  }
};
</script>
<style>
</style>
