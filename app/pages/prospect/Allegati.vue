<template>
  <Page>
    <ActionBar title="Allegati">
      <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
<GridLayout rows="*,70" backgroundColor="lightgray">
     <ScrollView row="0">
      <GridLayout rows="*,70" backgroundColor="lightgray">
      </GridLayout>
  </ScrollView>
  <StackLayout row="1" orientation="horizontal">
        <Button class="my-button" width="100%" height="70" @tap="goTo" text="Avanti"></Button>
    </StackLayout>
</GridLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
      }
    },
    mounted(){},
    methods: {      
      indietro(){
        this.$navigateTo(this.$router.Contratto, {
          animated: true,
          transition: {
            name: 'slideRight',
            duration: 500,
            curve: 'linear'
            }
            });
      },
      logOut(){
        this.$store.dispatch('Status/setStatus', {})
        this.$navigateTo(this.$router.Login , { clearHistory: true });
      }
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #BC1254;
        color: #ffffff;
    }
  .my-button {
      background-color: #BC1254;
      color: white;
      width:85%;
      font-weight: bold;
      padding-top: 14;
      padding-bottom: 14;
      text-transform: uppercase;
      letter-spacing: 0.1;
      margin-bottom: 20;
      margin-top: 10;
    }
</style>