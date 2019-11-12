<template>
    <Page>
      <ActionBar title="Prospect"/>
      <StackLayout backgroundColor="#3c495e">
        <Label class="message" text="Benvenuto in Prospect" col="0" row="0"/>
        <Button text="Nuovo Prospect" @tap="newProspect"/>
        <Button text="Logout" @tap="logOut"/>
      </StackLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {}
    },
    computed: {
      ReturnedStore(){
        return this.$store.getters['Status/getStatus']
      }
    },
    methods: {
      newProspect(){
        this.$navigateTo(this.$router.Search);  
      },
      logOut(){
        this.$store.dispatch('Status/setStatus', '')
        this.$navigateTo(this.$router.Login);
      }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #BC1254;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
