<template>
  <div>

    <!--  video player-->
    <div class="row" style="margin-bottom: 75px">
      <div class="col-8">
        <p>video player</p>

        <video v-if="showVideo"
          id="main-video"
          controls
          preload="auto"
          height="100%"
          width="100%"
          data-setup="{}"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2FTSD%20Session%2009%20%20Intake%2018-20210411_115916-Meeting%20Recording.mp4?alt=media&token=f70de90c-69c1-483a-8e1b-2caae7c416e9" type="video/mp4" />
        </video>

        <div v-if="showPdf">
          <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
          <button @click="prevPage">Prev</button>
          <button @click="nextPage">Next</button>
          <div style="width: 100%; height: 100%">
            <pdf ref="pdf"
                 :src="src"
                 style="border: 1px solid red"
                 :page="page"
                 @progress="loadedRatio = $event"
                 @num-pages="numPages = $event"
                 @link-clicked="page = $event"
            >
            </pdf>
          </div>
        </div>

      </div>
      <div class="col-4">
        <p>Playlist</p>

        <ul style="margin-top:25px; padding: 25px;list-style-type: none; height:500px; width:100%; overflow:hidden; overflow-y:scroll;">
          <li>
            <card class="card-user" style="height: 150px">
              <button @click="enableVideo">Now Playing</button>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 8</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 7</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 6</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 5</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 4</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 3</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 2</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px">
              <p>Lecture 1</p>
            </card>
          </li>
        </ul>

      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p>Slides</p>

        <ul style="width:100%; margin-top:25px; padding: 25px; list-style-type: none; overflow:hidden; display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto;">
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <button @click="enablePDF">View Now</button>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 8</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 7</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 6</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 5</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 4</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 3</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 2</p>
            </card>
          </li>
          <li>
            <card class="card-user" style="height: 150px; width: 250px; padding: 20px; margin-right: 10px;">
              <p>Lecture 1</p>
            </card>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
  import video from 'video.js';
  import pdf from "vue-pdf";

  export default {
    name: "Module",
    components: {
      video,
      pdf
    },
    data () {
      return {
        showVideo: true,
        showPdf: false,
        src:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Flec-1.pdf?alt=media&token=85573e42-34ef-4efe-86cf-c74f2e7d6fc2',
        loadedRatio: 0,
        page: 1,
        numPages: 0,
        rotate: 0,
      }
    },
    methods: {
      password: function(updatePassword, reason) {

        updatePassword(prompt('password is "test"'));
      },
      error: function(err) {

        console.log(err);
      },
      nextPage() {
        if (this.page < this.numPages) {
          this.page = this.page + 1;
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page = this.page - 1;
        }
      },
      enableVideo() {
        this.showVideo = true;
        this.showPdf = false;
      },
      enablePDF() {
        this.showPdf = true;
        this.showVideo = false;
      }
    }
  }

</script>

<style scoped>

</style>
