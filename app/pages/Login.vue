<template>
  <Page>
    <ActionBar title="Home">
    </ActionBar>
    <GridLayout  columns="*" rows="*">
    <StackLayout backgroundColor="#3c495e">
      <Label class="message" :text="msg" col="0" row="0"/>
      <Label class="message" :text="$store.getters['Status/getStatus']" col="0" row="0"/>
      <Button class="btn btn-primary" col="1" row="1" 
        text="go To Login" @tap="goto"></Button>
        <Button class="btn btn-primary" col="1" row="1" 
        text="FakeLogin" @tap="fakeLogin"></Button>
    </StackLayout>
    </GridLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Benvenuto in questa Page'
      }
    },
    mounted(){
       this.$store.dispatch('Status/checkStatus')
          if(this.$store.getters['Status/getStatus'] != ''){
            alert('Login Gia effettuato')
            .then(() => {this.$navigateTo(this.$router.Prospect)})
            }
    },
    methods: {
      goto(){
        this.$store.dispatch('Status/setStatus', 'Login Effettuato')
        this.$navigateTo(this.$router.Prospect);
      },
      fakeLogin(){
        this.$navigateTo(this.$router.Prospect);
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
