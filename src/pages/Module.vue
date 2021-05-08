<template>
  <div>

    <!--  video player-->
    <div class="row" style="margin-bottom: 75px">
      <div class="col-8">
        <p>CIS 7015 - Team Software Development</p>

        <video :key="vdoIndex" v-if="showVideo" style="background: black"
          id="main-video"
          controls
          preload="auto"
          height="100%"
          width="100%"
          data-setup="{}"
        >
          <source :key="vdoIndex" :src=srcVdo type="video/mp4" />
        </video>

        <div v-if="showPdf">
          <div style="width: 100%; height: 100%; margin-bottom: 5px">
            <pdf ref="pdf"
                 :src="src"
                 style="border: 1px solid ghostwhite;"
                 :page="page"
                 @progress="loadedRatio = $event"
                 @num-pages="numPages = $event"
                 @link-clicked="page = $event"
            >
            </pdf>
          </div>
          <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
          <p-button type="default" @click.native.prevent="prevPage" style="margin-right: 2px">Prev</p-button>
          <p-button type="default" @click.native.prevent="nextPage">Next</p-button>
        </div>

      </div>
      <div class="col-4">
        <p>View All</p>

        <ul style="list-style-type: none; height:550px; width:100%; overflow:hidden; overflow-y:scroll;">
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session9.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(9)">
              <p-button disabled="true" v-if="vdoIndex === 9" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session8.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(8)">
              <p-button disabled="true"  v-if="vdoIndex === 8" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session7.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(7)">
              <p-button disabled="true"  v-if="vdoIndex === 7" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session6.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(6)">
              <p-button disabled="true"  v-if="vdoIndex === 6" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session5.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(5)">
              <p-button disabled="true"  v-if="vdoIndex === 5" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session4.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(4)">
              <p-button disabled="true"  v-if="vdoIndex === 4" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session3.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(3)">
              <p-button disabled="true"  v-if="vdoIndex === 3" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session2.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(2)">
              <p-button disabled="true"  v-if="vdoIndex === 2" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 170px; margin-bottom: 20px">
              <img src="@/assets/img/session1.png" style="width: 100%; height: 100%; cursor: pointer" @click="enableVideo(1)">
              <p-button disabled="true" v-if="vdoIndex === 1" type="info" round style="position: absolute; top: 8px; left: 16px;">
                Now Playing
              </p-button>
            </div>
          </li>
        </ul>

      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p>Slides</p>

        <ul style="width:100%; padding-left: 0; list-style-type: none; overflow:hidden; display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto;">
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px; ">
              <img src="@/assets/img/slide9.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(9)">
              <p-button v-if="slideIndex === 9" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide7.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(7)">
              <p-button v-if="slideIndex === 7" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide6.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(6)">
              <p-button v-if="slideIndex === 6" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide5.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(5)">
              <p-button v-if="slideIndex === 5" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide4.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(4)">
              <p-button v-if="slideIndex === 4" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide3.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(3)">
              <p-button v-if="slideIndex === 3" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide2.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(2)">
              <p-button v-if="slideIndex === 2" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
          </li>
          <li>
            <div class="card-user" style="position: relative; height: 150px; width: 250px; margin-right: 10px;">
              <img src="@/assets/img/slide1.png" style="width: 100%; height: 100%; cursor: pointer" @click="enablePDF(1)">
              <p-button v-if="slideIndex === 1" type="warning" round style="position: absolute; top: 8px; left: 16px;">
                Currently viewing
              </p-button>
            </div>
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
        slideIndex: 0,
        src:'',
        src9:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-9.pdf?alt=media&token=c8e86ffb-23c1-462e-9e11-68c1b3ee8efd',
        src7:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-7.pdf?alt=media&token=8100ad06-b44a-44a3-9d01-8ee3502df08a',
        src6:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-6.pdf?alt=media&token=9b41eb01-11a2-46c5-96fc-e78e0db46e12',
        src5:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-5.pdf?alt=media&token=bcddc299-3753-47c0-9e47-cede4c9a6ddf',
        src4:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-4.pdf?alt=media&token=4f330469-d95f-4ce9-9fcf-2aac02d047b9',
        src3:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-3.pdf?alt=media&token=47529b03-b087-4712-9965-1f61ee2feab3',
        src2:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-2.pdf?alt=media&token=25533641-df36-4184-89f6-cfc70b2380db',
        src1:'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fslide-1.pdf?alt=media&token=0d26edca-4c84-48fc-937e-89502a809d46',
        srcVdo: 'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fsession-9.mp4?alt=media&token=bb84260c-d5cb-4225-bf76-c8f2b0a1c5b1',
        srcVdo9: 'https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fsession-9.mp4?alt=media&token=bb84260c-d5cb-4225-bf76-c8f2b0a1c5b1',
        srcVdo8: "https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fsession-8.mp4?alt=media&token=bee1ef30-259d-4925-9b93-893caad2b443",
        srcVdo7: "https://firebasestorage.googleapis.com/v0/b/bitnami-mx-kdbnbjq.appspot.com/o/Materials%2Fsession-7.mp4?alt=media&token=35977656-9712-4d1f-8929-8df95e3e8bfa",
        vdoIndex: 9,
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
      enableVideo(index) {
        switch (index) {
          case 9:
            this.srcVdo = this.srcVdo9;
            break;
          case 8:
            this.srcVdo = this.srcVdo8;
            break;
          case 7:
            this.srcVdo = this.srcVdo7;
            break;
          case 6:
            this.srcVdo = this.srcVdo8;
            break;
          case 5:
            this.srcVdo = this.srcVdo8;
            break;
          case 4:
            this.srcVdo = this.srcVdo8;
            break;
          case 3:
            this.srcVdo = this.srcVdo8;
            break;
          case 2:
            this.srcVdo = this.srcVdo8;
            break;
          case 1:
            this.srcVdo = this.srcVdo8;
            break;
          default:
            this.srcVdo = this.srcVdo9;
        }
        this.slideIndex = 0;
        this.vdoIndex = index;
        this.showVideo = true;
        this.showPdf = false;
      },
      enablePDF(index) {
        switch (index) {
          case 9:
            this.src = this.src9;
            break;
          case 7:
            this.src = this.src7;
            break;
          case 6:
            this.src = this.src6;
            break;
          case 5:
            this.src = this.src5;
            break;
          case 4:
            this.src = this.src4;
            break;
          case 3:
            this.src = this.src3;
            break;
          case 2:
            this.src = this.src2;
            break;
          case 1:
            this.src = this.src1;
            break;
          default:
            this.src = this.src9;
        }
        this.slideIndex = index;
        this.vdoIndex = 0;
        this.showPdf = true;
        this.showVideo = false;
      }
    }
  }

</script>

<style scoped>

</style>
