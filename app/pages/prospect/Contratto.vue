<template>
  <Page>
    <ActionBar title="Contratto">
      <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
    <GridLayout rows="*,70" backgroundColor="lightgray">
      <ScrollView row="0">
        <GridLayout rows="*,5" backgroundColor="lightgray">
          <FlexboxLayout flexDirection="column" width="100%" height="100%" >
            
            <!-- Agenzia -->
            <Label text="Agenzia" style="margin-top: 20px;"/>
            <Label class="select" :text="(selected.agenzia!='') ? selected.agenzia : 'Seleziona'" @tap="controllo('agenzia')"/>
            
            <!-- Agente -->
            <Label v-show="selected.agenzia" text="Agente" style="margin-top: 20px;"/>
            <Label v-show="selected.agenzia" class="select" :text="(selected.agente!='') ? selected.agente : 'Seleziona...'" @tap="controllo('agente')"/>
            
            <!-- Segnalatore -->
            <Label v-show="selected.agente" text="Segnalatore" style="margin-top: 20px;"/>
            <Label v-show="selected.agente" class="select" :text="(selected.segnalatore!='') ? selected.segnalatore : 'Seleziona...'" @tap="controllo('segnalatore')"/>
            
            <!-- Sportello -->
            <Label v-show="selected.segnalatore" text="Sportello" style="margin-top: 20px;"/>
            <Label v-show="selected.segnalatore" class="select" :text="(selected.sportello!='') ? selected.sportello : 'Seleziona...'" @tap="controllo('sportello')"/>
            
            <!-- Data -->
            <Label v-show="selected.sportello" text="Data" style="margin-top: 20px;"/>
            <DatePickerField v-show="selected.sportello" class="select" hint="DD MM YYYY" minDate="1990/01/01" @dateChange="(args)=>{selected.data = args.value}" :date="(selected.data=='') ? null : selected.data"/>
            
            <!-- Numero Plico -->
            <Label v-show="selected.data" text="Numero plico" style="margin-top: 20px;"/>
            <Label v-show="selected.data" class="select" :text="(selected.numeroPlico!='')?selected.numeroPlico:'Seleziona...'" @tap="controllo('numeroPlico')"/>
            
            <!-- Listino Gas -->
            <Label v-show="selected.numeroPlico" text="Listino Gas" style="margin-top: 20px;"/>
            <Label v-show="selected.numeroPlico" class="select" :text="(selected.listinoGas!='')? selected.listinoGas : 'Seleziona listino'" @tap="controllo('listinoGas')"/>
            
            <!-- Listino Energia -->
            <Label v-show="selected.numeroPlico" text="Listino Energia" style="margin-top: 20px;"/>
            <Label v-show="selected.numeroPlico" class="select" :text="(selected.listinoEnergia!='')? selected.listinoEnergia : 'Seleziona listino'" @tap="controllo('listinoEnergia')"/>
            
            <!-- Modalità di pagamento -->
            <Label v-show="selected.listinoGas || selected.listinoEnergia" text="Metodo di pagamento" style="margin-top: 20px;"/>
            <Label v-show="selected.listinoGas || selected.listinoEnergia" class="select" :text="(selected.modPagamento!='') ? selected.modPagamento : 'Seleziona...'" @tap="controllo('modPagamento')"/>
            
            <!-- Banca/Carta -->
            <Label v-show="selected.modPagamento" text="Banca/Carta" style="margin-top: 20px;"/>
            <Label v-show="selected.modPagamento" class="select" :text="(selected.modalita!='')? selected.modalita : 'Seleziona'" @tap="controllo('modalita')"/>

            <!-- Errore -->
            <Label v-show="errore" :text="errore" style="color:red; margin-top:20px"/>

          </FlexboxLayout>
        </GridLayout>
      </ScrollView>
      <StackLayout row="1" orientation="horizontal">
        <Button class="my-button" width="100%" height="70" @tap="nextStep" text="Avanti"/>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
        selected: {
          agenzia: '',
          agente: '',
          segnalatore:'',
          sportello:'',
          data: '',
          numeroPlico: '',
          listinoGas:'',
          listinoEnergia:'',
          modPagamento:'',
          modalita:'',
        },
        serie:['agenzia', 'agente', 'segnalatore', 'sportello', 'data', 'numeroPlico', 'listinoGas', 'listinoEnergia', 'modPagamento', 'modalita'],
        errore:'',

        agenzia: ['EvaEnergy', 'Union', 'Gass', 'Amma fa e tarantelle'], // computed per recuperare le agenzie
        agente: ['Mario Rossi', 'Davide Bianchi', 'Ciro Esposito'], // computed per recuperare gli agenti
        segnalatore: ['boh', 'mha'], //computed per recuperare i segnalatori
        sportello: ['1', '2', '3'], //computed per recuperare gli sportelli
        numeroPlico: ['1','2','3','4','5'], //computed per recuperare i numeri di plico
        listinoGas: ['C1', 'C2', 'C3', 'C4', 'C5'], //computed per recuperare i listini gas
        listinoEnergia: ['B1', 'B2', 'B3', 'B4', 'B5'], //computed per recuperare i listini energia
        modPagamento: ['Mensile', 'Trimestrale', 'Semestrale', 'Annuale'], //computed per recuperare le modalità di pagamento
        modalita: ['Banca', 'Carta'], //computed per recuperare la modalità di accredito
      }
    },
    mounted(){
      if( Object.keys(this.$store.getters['Prospect/getContratto']).length != 0 ) this.selected = this.$store.getters['Prospect/getContratto']
    },
    methods: {   
      nextStep(){
        for(let i in this.serie){
          if(this.serie[i]=='listinoEnergia'||this.serie[i]=='listinoGas') continue
          if(this.selected[this.serie[i]] == '') {
            this.errore = 'Tutti i campi sono obbligatori'
            return
          }
        }
        this.$store.dispatch('Prospect/setContratto', { ...this.selected })
        this.$navigateTo(this.$router.Allegati, {
          animated: true,
          transition: {
            name: 'fade',
            duration: 500,
            curve: 'linear'
          }
        });
      },    
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
        this.$store.dispatch('Status/setStatus', {})
        this.$store.dispatch('Prospect/clearAll')
        this.$navigateTo(this.$router.Login , { clearHistory: true });
      },
      async controllo(option){
        await action('', '', this[option])
        .then(res => {
          this.selected[option] = res
        })
        this.errore=''
        if(this.selected.listinoEnergia==''&&this.selected.listinoGas==''){
          this.selected.modPagamento=''
          this.selected.modalita=''
        }
        
        for(let i in this.serie){
          if(this.serie[i]=='listinoEnergia'||this.serie[i]=='listinoGas') continue
          if(this.selected[this.serie[i]] == '') {
            for(let index=i;index<this.serie.length;index++){
              this.selected[this.serie[index]] = ''
            }
            return
          }
        }
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
  .select{
    background-color:white;
    color: gray;
    border-radius:10;
    padding:10;
    margin-top: 5;
    margin-right:10;
    margin-left:10;
    font-size: 24px;
  }
  TextField{
    background-color:white;
    border-radius:10;
    padding:10;
    margin-top: 5;
    margin-right:10;
    margin-left:10;
  }
  label{
    margin-right:10;
    margin-left:10;
  }
</style>