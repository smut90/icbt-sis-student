<template>
  <div>

    <div v-if='successMsgs !== "" '>
      <div class="row">
        <div class="col-sm-12 col-md-12">

          <div class="alert alert-success">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span>{{successMsgs}}</span>
          </div>

        </div>
      </div>
    </div>

    <!-- Assignments -->
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <table class="table" :class="tableClass">
              <thead>
              <slot name="columns">
                <th v-for="column in table1.columns" :key="column">{{column}}</th>
              </slot>
              </thead>
              <tbody>
              <tr v-for="(item, index) in table1.data"
                  :key="index"
                  v-bind:class="[ activeAssignmentIndex === index ? 'active' : 'non-active']"
                  @click.stop.prevent="setActiveEvent(index, item)">
                <slot :row="item">
                  <td v-for="(column, index) in table1.columns"
                      :key="index"
                      v-if="hasValue(item, column)">
                    {{itemValue(item, column)}}
                  </td>
                </slot>
              </tr>
              </tbody>
            </table>
          </div>
        </card>
      </div>
    </div>

    <!-- Submission -->
    <card class="card" :title=user.assignment>
      <div style="padding: 25px 50px 50px 50px">
        <form>
          <div class="row">
            <div class="col-md-2">
              <h5>Center</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.center}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Program</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.program}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Batch</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.batch}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Module</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.module}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Assignment Name</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.assignment}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Description</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.description}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Date of Issue</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.date_issued}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Date of Submission</h5>
            </div>
            <div class="col-md-10">
              <p>{{user.date_submission}}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <h5>Attachment</h5>
            </div>
            <div class="col-md-4">
              <input
                type="file"
                ref="image"
                :disabled='activeAssignmentIndex === null || activeAssignmentIndex === "" '
                @change="fileSelected">
            </div>
          </div>

          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-10">
              <p-button type="info"
                        :disabled='activeAssignmentIndex === null || activeAssignmentIndex === "" '
                        round
                        @click.native.prevent="uploadFile">
                Upload
              </p-button>
            </div>
          </div>

          <div class="clearfix"></div>
        </form>
      </div>
    </card>

  </div>
</template>
<script>
  import { PaperTable } from "@/components";
  const fb = require('../firebaseConfig.js');
  const tableColumns = ["Id", "Code", "Name", "Issued", "Due", "Status"];
  const tableData1 = [
    {
      id: 1,
      code: "CIS7028",
      name: "Information Security and Document Management",
      issued: "03-01-2021",
      due: "04-04-2021",
      status: "not submitted"
    },
    {
      id: 2,
      code: "CIS7015",
      name: "Team Software Development Project",
      issued: "03-01-2021",
      due: "05-01-2021",
      status: "not submitted"
    },
    {
      id: 3,
      code: "CIS7008",
      name: "Technology Project Management",
      issued: "03-01-2021",
      due: "05-09-2021",
      status: "not submitted"
    }
  ];

  export default {
    components: {
      PaperTable
    },
    data() {
      return {
        errorMsgs: "",
        successMsgs: "",
        activeAssignmentIndex: '',
        activeAssignment: '',
        type: {
          type: String, // striped | hover
          default: "hover"
        },
        title: {
          type: String,
          default: ""
        },
        subTitle: {
          type: String,
          default: ""
        },
        file: "",
        user: {
          university_number: "20121221",
          center: "ICBT Campus Colombo",
          program: "MSc in Information Technology (CMU)",
          batch: "18",
          module: "click a module to load",
          assignment: "click a module to load",
          description: "click a module to load",
          date_issued: "click a module to load",
          date_submission: "click a module to load",
        },
        table1: {
          title: "Assignment Submission",
          subTitle: "Current active submissions",
          columns: [...tableColumns],
          data: [...tableData1]
        },
      };
    },
    computed: {
      tableClass() {
        return `table-${this.type}`;
      }
    },
    methods: {
      fileSelected(e){
        this.file = e.target.files;
      },
      uploadFile(){
        if (this.file && this.file.length > 0) {
          const file = this.file[0];
          const imageName = file.name;
          const path = this.user.university_number + "/" + this.activeAssignment.code + "/" + imageName;

          const storageRef = fb.storage.ref();
          const fileRef = storageRef.child(path);

          fileRef
            .put(file)
            .then(() => {
              console.log('successfully uploaded');
              this.successMsgs = 'successfully uploaded the assignment';
            });

        } else {
          console.error('no file attached');
          this.errorMsgs = 'no file attached';
        }


      },
      setActiveEvent(index, item) {
        this.activeAssignmentIndex = index;
        this.activeAssignment = item;
        this.user.module = item.code + " - " + item.name;
        this.user.assignment = item.name + " - Assignment";
        this.user.description = item.name;
        this.user.date_issued = item.issued;
        this.user.date_submission = item.due;
      },
      hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>
<style scoped>
  .active{
    background-color: whitesmoke;
  }
  .non-active {
    background-color: white;
  }
</style>
