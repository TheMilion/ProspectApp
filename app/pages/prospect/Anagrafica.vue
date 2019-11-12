<template>
    <Page>
        <ActionBar title="Anagrafica" flat="true">
          <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
        </ActionBar>
        <FlexBoxLayout flexDirection="column">
            <Label text="Anagrafica"/>
        </FlexBoxLayout>
    </Page>
</template>

<script>
export default {
    methods:{
        indietro(){
            this.$navigateTo(this.$router.Search)
        }
    }   
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    Label{
      font-size: 24px;
      text-align: center;
    }
</style>