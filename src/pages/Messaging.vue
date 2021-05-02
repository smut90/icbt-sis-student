<template>
  <div>
    <div id="talkjs-container" style="width: 90%; margin: 30px; height: 650px"><i>Loading chat...</i></div>
  </div>
</template>

<script>
  import Talk from "talkjs";

  export default {
    name: "Messaging",
    components: {
      Talk
    },
    data () {
      return {

      }
    },
    mounted: function() {
      Talk.ready.then(function() {
        const me = new Talk.User({
          id: parseInt(Math.random()*500000).toString(),
          name: "Supun",
          email: "demo@talkjs.com",
          photoUrl: "https://freesvg.org/img/myAvatar.png",
          welcomeMessage: "Hey there! How are you? :-)",
          role: "booker"
        });

        const talkSession = new Talk.Session({
          appId: "tJL5DSbm",
          me: me
        });

        const admin = new Talk.User({
          id: parseInt(Math.random()*500000).toString(),
          name: "Admin",
          email: "demo@talkjs.com",
          photoUrl: "https://pbs.twimg.com/profile_images/1342402842/aa_400x400.JPG",
          welcomeMessage: "Hey, how can I help?",
          role: "booker"
        });

        const conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, admin));
        conversation.setAttributes({
          subject: "Research Unit"
        });
        conversation.setParticipant(me);
        conversation.setParticipant(admin);

        const inbox = talkSession.createInbox({ selected: conversation });
        inbox.mount(document.getElementById("talkjs-container"));
      });
    }
  }
</script>

<style scoped>

</style>
