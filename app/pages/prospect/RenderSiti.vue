<template>
  <Page>
    <ActionBar title="Prospect">
      <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
        <StackLayout backgroundColor="lightgray">
          <Label text="RenderSiti"/>
        </StackLayout>
  </Page>
</template>

<script >
    export default {
        methods: {
            indietro(){
                this.$navigateTo(this.$router.Anagrafica, {
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
    }
</script>

<style scoped>
    ActionBar {
        background-color: #BC1254;
        color: #ffffff;
    }
</style>
