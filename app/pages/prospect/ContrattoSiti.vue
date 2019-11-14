<template>
  <Page>
    <ActionBar title="Prospect">
      <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
        <StackLayout backgroundColor="lightgray">
          <Label :text="get.sitoListino"/>
        </StackLayout>
  </Page>
</template>

<script >
    export default {
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
                this.$store.dispatch('Status/setStatus', '')
                this.$store.dispatch('Prospect/clearAll')
                this.$navigateTo(this.$router.Login , { clearHistory: true });
            }
        },
        computed:{
            get(){
                return this.$store.getters['Prospect/getContratto']
            }
        }
    }
</script>

<style scoped>
    ActionBar {
        background-color: #BC1254;
        color: #ffffff;
    }
</style>
