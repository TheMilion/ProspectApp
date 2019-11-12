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
            <StackLayout row="1" v-show="tipoPersona">
              <Label style="margin-bottom: 20px">Tipo Persona: {{ tipoPersona }}</Label>
              <TextField hint="Codice Fiscale" v-model="codiceFiscale" />
              <Label v-if="errore.codiceFiscale">
                <FormattedString>
                  <Span text="Errore sul campo compilato" style="font-size:14px; color: red" />
                </FormattedString>
              </Label>
              <StackLayout v-show="tipoPersona == 'Persona Giuridica'">
                <TextField keyboardType="number" hint="Partita Iva" v-model="partitaIva"/>
                <Label v-if="errore.partitaIva">
                  <FormattedString>
                    <Span text="Errore sul campo compilato" style="font-size:14px; color: red" />
                  </FormattedString>
                </Label>
              </StackLayout>
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
      let get = this.$store.getters['Prospect/getSearch']
      if(get.tipoPersona == '') return
      else {
        this.tipoPersona = get.tipoPersona
        if(!get.campoSearch.search(/[A-Z]/)) this.codiceFiscale = get.campoSearch
        else this.partitaIva = get.campoSearch
      } 
    },
    data(){
      return {
        tipoPersona: 'Persona Fisica',
        codiceFiscale: 'MRNGPP97P26F839T',
        partitaIva: '',
        errore: {
          codiceFiscale: false,
          partitaIva: false
        }
      }
    },
    methods:{
      indietro(){
        this.$store.dispatch('Prospect/clear')
        this.$navigateTo(this.$router.Prospect, {
          clearHistory: true,
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
      },
      onSelected(){
        action('', '', ['Persona Fisica', 'Persona Giuridica'])
        .then(res => {
          this.tipoPersona = res
        })
      },
      checkRicerca(){
        this.codiceFiscale = this.codiceFiscale.toUpperCase()
        
        if(this.tipoPersona == 'Persona Giuridica'){
          //Controllo partita iva
          if(!!!this.partitaIva.search(/^[0,1][0-9]{10}$/)) return this.nextStep(this.partitaIva)
          else this.errore.partitaIva = true
        }
        
        //Controllo codice fiscale
        if(!!!this.codiceFiscale.search(/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i)) return this.nextStep(this.codiceFiscale)
        else this.errore.codiceFiscale = true
      },
      nextStep(payload){
        this.$store.dispatch('Prospect/setSearch', {'campoSearch': payload, 'tipoPersona': this.tipoPersona})
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
  }
</style>
