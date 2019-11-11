<template>
    <Page>
        <ActionBar title="Details">
          <NavigationButton icon="res://ic_menu" tap="showSideDrawer" />
        </ActionBar>
<StackLayout backgroundColor="#3c495e">
    <Label class="message" text="Benvenuto in Prospect" col="0" row="0"/>
    <Label class="message" :text="ReturnedStore" col="0" row="0"/>
    <Button text="Logout" @tap="logOut" />
  </StackLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello Details!',
        ReturnedStore: ''
      }
    },
    mounted(){
      this.$store.dispatch('Status/checkStatus')
          if(this.$store.getters['Status/getStatus'] == ''){
            alert('Non Hai i permessi per visualizzare questa pagina')
            .then(() => {this.$navigateTo(this.$router.Login)})
            }
          else{
            this.ReturnedStore = this.$store.getters['Status/getStatus']
          }
    },
    methods: {
      checkStatus(){
       
      },
      fakeLogout(){
        this.$navigateTo(this.$router.Login);  
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
