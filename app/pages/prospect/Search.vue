<template>
    <Page>
        <ActionBar title="Ricerca" flat="true">
          <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
        </ActionBar>
        <StackLayout style="margin-top:50px">
          <Button text="Seleziona la tipologia Cliente" @tap="onSelected"/>
          <StackLayout v-show="tipoPersona">
            <Label>Tipo Persona: {{ tipoPersona }}</Label>
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
            <Button text="Avanti" @tap="checkRicerca" />
          </StackLayout>
        </StackLayout>
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
        tipoPersona: '',
        codiceFiscale: '',
        partitaIva: '',
        errore: {
          codiceFiscale: false,
          partitaIva: false
        }
      }
    },
    methods:{
      indietro(){
        this.$navigateTo(this.$router.Prospect)
      },
      onSelected(){
        action('Seleziona il tipo di persona', '', ['Persona Fisica', 'Persona Giuridica'])
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
        this.$navigateTo(this.$router.Anagrafica)
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
