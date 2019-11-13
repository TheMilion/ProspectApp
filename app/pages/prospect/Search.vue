<template>
    <Page>
      
      <ActionBar title="Ricerca" flat="true">
        <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
        <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem>
      </ActionBar>
      
      <GridLayout rows="*,70" backgroundColor="lightgray">
        <ScrollView row="0">
          <GridLayout rows="*,150" backgroundColor="lightgray">
            <Button row="0" class="buttonModal" width="100%" height="70" text="Seleziona il tipo di Persona" @tap="onSelected"/>
            <StackLayout row="1" v-show="search.tipoPersona == 'Persona Fisica'">
              <Label  style="margin-bottom: 20px">Tipo Persona: {{ search.tipoPersona }}</Label>
              <TextField hint="Codice Fiscale" v-model="search.codiceFiscale"/>
              <Label v-if="errore.codiceFiscale">
                <FormattedString>
                  <Span text="Errore sul campo compilato" style="font-size:14px; color: red" />
                </FormattedString>
              </Label>
            </StackLayout>
            <StackLayout row="2" v-show="search.tipoPersona == 'Persona Giuridica'">
              <Label  style="margin-bottom: 20px">Tipo Persona: {{ search.tipoPersona }}</Label>
              <TextField keyboardType="number" hint="Partita Iva" v-model="search.partitaIva"/>
              <Label v-if="errore.partitaIva">
                <FormattedString>
                  <Span text="Errore sul campo compilato" style="font-size:14px; color: red" />
                </FormattedString>
              </Label>
            </StackLayout>
          </GridLayout>
        </ScrollView>
        <StackLayout row="2" orientation="horizontal">
          <Button class="my-button" width="100%" height="70" @tap="checkRicerca" text="Avanti"/>
        </StackLayout>
      </GridLayout>
    
    </Page>
</template>
<script>
  export default {
    mounted(){
      if(Object.keys(this.$store.getters['Prospect/getSearch']).length != 0) this.search = {...this.$store.getters['Prospect/getSearch'] }
    },
    data(){
      return {
        search:{
          tipoPersona: '',
          codiceFiscale: '',
          partitaIva: '',
        },
        errore: {
          codiceFiscale: false,
          partitaIva: false
        }
      }
    },
    methods:{
      async indietro(){
        await this.$store.dispatch('Prospect/clear')
        await this.$navigateTo(this.$router.Prospect, {
          clearHistory: true,
          animated: true,
          transition: {
            name: 'slideRight',
            duration: 500,
            curve: 'linear'
          }
        });
      },
      async logOut(){
        await this.$store.dispatch('Status/setStatus', {})
        await this.$store.dispatch('Prospect/clear')
        await this.$navigateTo(this.$router.Login , { clearHistory: true });
      },
      onSelected(){
        action('', '', ['Persona Fisica', 'Persona Giuridica'])
        .then(res => {
          this.search.tipoPersona = res
        })
      },
      checkRicerca(){
        this.search.codiceFiscale = this.search.codiceFiscale.toUpperCase()
        
        if(this.search.tipoPersona == 'Persona Giuridica'){
          
          //Controllo partita iva
          if(!!!this.search.partitaIva.search(/^[0,1][0-9]{15}$/) || !!!this.search.partitaIva.search(/^[0,1][0-9]{10}$/)) return this.nextStep()
          else this.errore.partitaIva = true
        } else {
          
          //Controllo codice fiscale Persona Fisica
          if(!!!this.search.codiceFiscale.search(/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i)) return this.nextStep()
          else this.errore.codiceFiscale = true
        
        }
      },
      nextStep(){
        this.$store.dispatch('Prospect/setSearch', this.search)
        this.$navigateTo(this.$router.Anagrafica , {
          animated: true,
          transition: {
            name: 'fade',
            duration: 500,
            curve: 'linear'
          }
        });
      }
    }
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
  .buttonModal{
    background-color: #a85b75;
    color: white;
    width:75%;
    font-weight: bold;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 10;
    margin-top: 10;
  }
  Label{
    font-size: 24px;
    text-align: center;
    margin-right:10;
    margin-left:10;
  }
  TextField{
    background-color:white;
    border-radius:10;
    padding:10;
    margin-top: 5;
    margin-right:10;
    margin-left:10;
  }
</style>
