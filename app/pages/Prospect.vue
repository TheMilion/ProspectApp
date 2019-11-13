<template>
  <Page>
    <ActionBar title="Prospect">
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
        <StackLayout orientation="vertical" width="100%" height="100%" backgroundColor="lightgray">
          <Label height="29%"/>
        <Button class="my-button"  width="80%" height="70" text="Inserisci Nuova Prospect" @tap="goto"></Button>
        <Button class="my-button" width="80%" height="70" text="Ricerca Prospect"></Button>
        </StackLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
      }
    },
    computed: {
        MyToken() {
            return this.$store.getters['Status/getStatus']
            }
          },
          mounted(){
            this.$store.dispatch('Prospect/clear'),
            this.$store.dispatch('Prospect/setAnagrafica', {})
          },
    methods: {
        goto(){
        this.$navigateTo(this.$router.Search, {
          animated: true,
            transition: {
              name: 'fade',
              duration: 500,
              curve: 'linear'
            }
            })
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
    .page {
      align-items: center;
      flex-direction: column;
      }
</style>
